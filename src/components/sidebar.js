import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
      <div className="container-fluid">
        {/* <!-- Toggler --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Brand --> */}
        <Link className="navbar-brand pt-0" to="/">
          <Image src="./assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
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
            <li className={`nav-item`}>
              <Link className="nav-link " to="/employees">
                <i className="ni ni-single-02 text-yellow"></i> Employees
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link className="nav-link" to="/histories">
                <i className="ni ni-folder-17 text-info"></i> History
              </Link>
            </li>
          </ul>
          <hr className="my-3"/>
        </div>
      </div>
    </nav>
  )
}