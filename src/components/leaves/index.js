import { Link } from "react-router-dom"
import DetailComp from "./detail"
import Table from "./table"

export default function LeavesComp({ leaves, leave, level }) {
  return (
    <div className="main-content">
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          {/* <!-- Brand --> */}
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">Dashboard</Link>
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
          <div className="col-8 mb-5 mb-xl-0">
            <div className="card shadow">
              <div className="card-header border-0">
                <h3 className="mb-0">Leave Request</h3>
              </div>
              <div className="table-responsive px-4">
                <Table leaves={leaves} />
              </div>
              <div className="card-footer py-3">
              </div>
            </div>
          </div>
          <div className="col-4">
            <DetailComp leave={leave} level={level} />
          </div>
        </div>
      </div>
    </div>
  )
}