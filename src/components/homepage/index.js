import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import CalendarComp from "./calendar"
import Table from "./table"

export default function Hompage({ user }) {
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
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">
          </div>
        </div>
      </div>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-8 mb-5 mb-xl-0">
            <div className="card shadow">
              <div className="card-header border-0">
                <h3 className="mb-0">Leave Request</h3>
              </div>
              <div className="table-responsive px-4">
                <Table leaves={user.Leaves} />
              </div>
              <div className="card-footer py-3">
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card card-profile shadow">
              <div className="d-flex justify-content-center align-items-center" style={{ height: "25rem"}}>
                <CalendarComp leaves={user.Leaves} />
              </div>
              {/* <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <Link href="#">
                      <Image src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body pt-0 pt-md-4">
                <div className="text-center mt-8">
                  <h3>{user.fullName}</h3>
                  <div className="h5 font-weight-300">{user.email}</div>
                  <div>{user.position}</div>
                  <hr className="my-4" />
                  <p>Reporting Manager — {user.reportingManager}</p>
                  <p>Aditional Manager — {user.aditionalManager}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}