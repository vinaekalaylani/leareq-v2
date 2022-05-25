import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import jsPDF from "jspdf";
import "jspdf-autotable";

import FilterComp from "./filter"
import Table from "./table"

export default function HistoriesComp({ history, type, status, deleted, year, setType, setStatus, setDeleted, setYear }) {
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "History";
    const headers = [["Name", "Date From", "Date To", "Type", "Total Days", "Status", "Approved / Rejected By"]];
    const data = history.map(el=> {
      let status = el.status === 0 ? "Pending" : ( el.status === 1 ? "Approved" : "Rejected") 
      return [el.User.fullName, el.dateFrom, el.dateTo, el.type, el.totalDays, status, el.approvedBy]
    });

    let content = {
      headStyles: { fillColor : "#5e72e4"},
      theme: "grid",
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.output('dataurlnewwindow');
  }

  return (
    <div className="main-content">
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          {/* <!-- Brand --> */}
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">Dashboard / History</Link>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
      {/* <!-- Header --> */}
      <div className="header pb-8 pt-5 pt-md-8">
        {/* <!-- Mask --!> */}
        <span className="mask bg-gradient-default opacity-8"></span>
      </div>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-9 mb-5 mb-xl-0">
            <div className="card shadow">
              <div className="card-header border-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="mb-0">History</h3>
                  </div>
                  <div className="col text-right">
                    <Button onClick={exportPDF} className="btn btn-sm btn-primary">Print</Button>
                  </div>
                </div>
              </div>
              <div className="table-responsive px-4">
                <Table history={history} />
              </div>
              <div className="card-footer py-3">
              </div>
            </div>
          </div>
          <div className="col-3">
            <FilterComp type={type} status={status} deleted={deleted} year={year} setType={setType} setStatus={setStatus} setDeleted={setDeleted} setYear={setYear} />
          </div>
        </div>
      </div>
    </div>
  )
}