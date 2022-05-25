import { Link } from "react-router-dom"

import FormComp from "./form"
import "./index.css"

export default function ApplyComp({ user }) {
  return (
    <div className="main-content">
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          {/* <!-- Brand --> */}
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">Dashboard / Apply</Link>
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
          <div className="col-xl-8 mb-5 mb-xl-0">
            <FormComp user={user} />
          </div>
          <div className="col-xl-3">
            <div className="card shadow mb-4">
              <div className="card-body row pt-0 pt-md-3 ms-2">
                <h2 className="heading text-muted mb-3">Reporting Information</h2>
                {user.reportingManager && (
                  <div className="report-card d-flex align-items-center ms-2 mb-3">
                    <div className="icon icon-shape bg-blue text-white rounded-circle shadow">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="ms-3">
                      <span>{user.reportingManager}</span>
                      <h6 className="heading-small text-muted">Reporting Manager</h6>
                    </div>
                  </div>
                )}
                {user.aditionalManager && (
                  <div className="report-card d-flex align-items-center ms-2">
                    <div className="icon icon-shape bg-black text-white rounded-circle shadow">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="ms-3">
                      <span>{user.aditionalManager}</span>
                      <h6 className="heading-small text-muted">Aditional Manager</h6>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}