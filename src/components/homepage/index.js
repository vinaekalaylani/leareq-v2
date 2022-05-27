import { Link } from "react-router-dom"

import CalendarComp from "./calendar"
import Table from "./table"

export default function Hompage({ user, event }) {

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
        {/* <!-- Header container --> */}
        <div className="container-fluid d-flex align-items-center mt--4">
          <div className="row">
            <div className="col-10">
              <h1 className="display-2 text-white">Hello {user.fullName}</h1>
              <p className="text-white mt-0 mb-2">This is your dashboard page. You can see current leave balances you've or request new leave</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-8 mb-5 mb-xl-0">
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
          <div className="col-3">
            <div className="card card-profile shadow mb-4">
              <div className="card-body row pt-0 pt-md-3 d-flex justify-content-center">
                <div className="d-flex align-items-center mb-2">
                  <div className="icon icon-shape bg-blue text-white rounded-circle shadow">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="ms-3">
                    <span>{user.fullName}</span>
                    <h5 className="text-muted">{user.email}</h5>
                  </div>
                </div>
                <div className="h5 row">
                  <div className="col-xl-6" style={{ color: "#5C7893" }}>
                    <i className="ni business_briefcase-24 mt-4"></i>Job Title<br />
                  </div>
                  <div className="col-xl-6 text-end">
                    <i className="ni business_briefcase-24 mt-4"></i>{user.position}<br />
                  </div>
                </div>
                {user.reportingManager !== "" && (
                  <div className="h5 row">
                    <div className="col-xl-6" style={{ color: "#5C7893" }}>
                      <i className="ni business_briefcase-24 mt-2"></i>Reporting Manager<br />
                    </div>
                    <div className="col-xl-6 text-end">
                      <i className="ni business_briefcase-24 mt-2"></i>{user.reportingManager}<br />
                    </div>
                  </div>
                )}
                {user.aditionalManager !== "" && (
                  <div className="h5 row">
                    <div className="col-xl-6" style={{ color: "#5C7893" }}>
                      <i className="ni business_briefcase-24 mt-2"></i>Aditional Manager<br />
                    </div>
                    <div className="col-xl-6 text-end">
                      <i className="ni business_briefcase-24 mt-2"></i>{user.aditionalManager}<br />
                    </div>
                  </div>
                )}
                <div className="h5 row">
                  <div className="col-xl-6" style={{ color: "#5C7893" }}>
                    <i className="ni business_briefcase-24 mt-2"></i>Leave<br />
                  </div>
                  <div className="col-xl-6 text-end">
                    <i className="ni business_briefcase-24 mt-2"></i>{user.leaveAvailable} Days Avalailable<br />
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow">
              <div className="d-flex justify-content-center align-items-center my-3">
                <CalendarComp leaves={event} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}