import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import { alertSuccess } from '../apis/swal';
import { getLevel } from "../store/action";

export default function Sidebar() {
  const { level } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("level")
    alertSuccess("Bye Byeee")
    history.push("/login")
  }

  useEffect(() => {
    dispatch(getLevel()) // eslint-disable-next-line
  }, [])

  return (
    <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
      <div className="container-fluid">
        {/* <!-- Toggler --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Brand --> */}
        <Link className="navbar-brand" to="/">
          <div className="m-0" style={{ fontWeight: "bold", color: "#5e72e4", fontSize: "35px" }}>LEAREQ</div>
        </Link>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          {/* <!-- Navigation --> */}
          <ul className="navbar-nav">
            <li className={`nav-item`}>
              <Link className="nav-link" to="/">
                <i className="ni ni-tv-2 text-primary"></i> Dashboard
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link className="nav-link " to="/apply">
                <i className="ni ni-fat-add text-blue"></i> Apply Leave
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link className="nav-link " to="/leaves">
                <i className="ni ni-bullet-list-67 text-orange"></i> Leaves
              </Link>
            </li>
            {level === "1" && (
              <>
                <li className={`nav-item`}>
                  <Link className="nav-link " to="/employees">
                    <i className="ni ni-single-02 text-yellow"></i> Employees
                  </Link>
                </li>
                <li className={`nav-item`}>
                  <Link className="nav-link" to="/histories">
                    <i className="ni ni-folder-17 text-info"></i> Report
                  </Link>
                </li>
              </>
            )}
            <li className={`nav-item`}>
              <div role="button" className="nav-link" onClick={handleLogout}>
                <i className="ni ni-user-run text-red"></i> Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}