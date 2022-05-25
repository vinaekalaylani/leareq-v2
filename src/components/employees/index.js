import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap";

import DetailComp from "./detail"
import TableComp from "./table"
import { useEffect, useState } from "react";
import ModalCreate from "./create";
import EditComp from "./edit";

export default function EmployeesComp({ user, users, fullName, deleted, setFullName, setDeleted }) {
  const [isEdit, setIsEdit] = useState(false)
  const [managers, setManagers] = useState([])
  const [show, setShow] = useState(false);

  const getManagers = () => {
    const res = users?.filter((el) => el.level === 1);
    setManagers(res)
  }

  useEffect(() => {
    getManagers() // eslint-disable-next-line
  }, [users])

  return (
    <div className="main-content">
      <ModalCreate
      managers={managers}
      setShow = {setShow}
      show = {show}/>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          {/* <!-- Brand --> */}
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">Dashboard / Employee</Link>
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
                  <div className="col ms-2">
                    <h3 className="mb-0">Employee</h3>
                  </div>
                  <div className="col-3 text-right">
                    <Button className="btn btn-sm btn-blue" onClick={() => setShow(true)}>New Employee</Button>
                  </div>
                </div>
              </div>
              <div className="table-responsive px-4">
                <div className="row align-items-end my-2">
                  <div className="col">
                    <Form.Check
                      type="checkbox"
                      label="Is Deleted"
                      value={deleted}
                      className="ms-3 mt-1"
                      onChange={() => setDeleted(!deleted)}
                      checked={deleted}
                    />
                  </div>
                  <div className="col-3 text-right">
                    <Form.Control
                      placeholder="Search by Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                <TableComp users={users} setIsEdit={setIsEdit}/>
              </div>
              <div className="card-footer py-3">
              </div>
            </div>
          </div>
          <div className="col-3">
            { !isEdit && <DetailComp user={user} setIsEdit={setIsEdit}/>}
            { isEdit && <EditComp managers={managers} user={user} setIsEdit={setIsEdit}/>}
          </div>
        </div>
      </div>
    </div>
  )
}