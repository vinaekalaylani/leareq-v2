export default function DetailComp({ user }) {
  return (
    <div className="card shadow">
      <div className="card-body row ms-1" style={{ fontSize: "14px" }}>
        <div className="h5 row">
          <div className="col-xl-5" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Name<br />
          </div>
          <div className="col-xl-7 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{user?.fullName || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-5" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Email<br />
          </div>
          <div className="col-xl-7 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{user?.email || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-5" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Job Title<br />
          </div>
          <div className="col-xl-7 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{user?.position || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-5" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Level<br />
          </div>
          <div className="col-xl-7 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{user.level === 0 ? "Staff" : "Superior" || ""}<br />
          </div>
        </div>
        {
          user.reportingManager && (
            <div className="h5 row">
              <div className="col-xl-6" style={{ color: "#5C7893" }}>
                <i className="ni business_briefcase-24 mt-4"></i>Reporting Manager<br />
              </div>
              <div className="col-xl-6 text-end">
                <i className="ni business_briefcase-24 mt-4"></i>{user?.reportingManager || ""}<br />
              </div>
            </div>
          )
        }
        {
          user.aditionalManager && (
            <div className="h5 row">
              <div className="col-xl-6" style={{ color: "#5C7893" }}>
                <i className="ni business_briefcase-24 mt-4"></i>Aditional Manager<br />
              </div>
              <div className="col-xl-6 text-end">
                <i className="ni business_briefcase-24 mt-4"></i>{user?.aditionalManager || ""}<br />
              </div>
            </div>
          )
        }
        <div className="h5 row">
          <div className="col-xl-5" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Leave<br />
          </div>
          <div className="col-xl-7 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{user?.leaveAvailable || ""}<br />
          </div>
        </div>
      </div>
    </div>
  )
}