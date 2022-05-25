import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { alertError, alertSuccess } from "../../apis/swal";
import { getUsers, updateUser } from "../../store/action";

export default function EditComp({ user, managers, setIsEdit }) {
  const dispatch = useDispatch()

  const [fullName, setFullName] = useState(user.fullName || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState(user.password || "");
  const [position, setPosition] = useState(user.position || "");
  const [reportingManager, setReportingManager] = useState(user.reportingManager || "");
  const [aditionalManager, setAditionalManager] = useState(user.aditionalManager || "");
  const [leaveAvailable, setLeaveAvailable] = useState(user.leaveAvailable || "");
  const [level, setLevel] = useState(user.level || "");

  const handleCancel = () => {
    setFullName("")
    setEmail("")
    setPassword("")
    setPosition("")
    setReportingManager("")
    setAditionalManager("")
    setLeaveAvailable("")
    setLevel("")
    setIsEdit(false)
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      password,
      position,
      reportingManager,
      aditionalManager,
      leaveAvailable,
      level,
    };

    dispatch(updateUser({ data, id: user.id }))
      .then(() => {
        dispatch(getUsers({ fullName: "", deleted: false }))
        setIsEdit(false)
        alertSuccess("Success")
      })
      .catch((err) => {
        alertError(err)
      })
  };

  return (
    <div className="card shadow">
      <div className="card-header border-0 pb-0">
        <h3 className="mb-0">Edit Employee</h3>
      </div>
      <div className="card-body row" style={{ fontSize: "14px" }}>
        <Form onSubmit={handleCreate}>
          <Form.Control
            className="mb-3"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <Form.Select
            className="mb-3"
            value={reportingManager}
            onChange={(e) => setReportingManager(e.target.value)}
          >
            <option value="">Select Reporting Manager</option>
            {managers.map((el) => (
              <option key={el.id + "RM"} value={el.fullName}>
                {el.fullName}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="mb-3"
            value={aditionalManager}
            onChange={(e) => setAditionalManager(e.target.value)}
          >
            <option value="">Select Aditional Manager</option>
            {managers.map((el) => (
              <option key={el.id + "AM"} value={el.fullName}>
                {el.fullName}
              </option>
            ))}
          </Form.Select>
          <Form.Control
            className="mb-3"
            placeholder="Leave"
            value={leaveAvailable}
            onChange={(e) => setLeaveAvailable(e.target.value)}
          />
          <Form.Select
            className="mb-3"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Select Level</option>
            <option value="0">Staff</option>
            <option value="1">Superior</option>
          </Form.Select>
          <div className="row">
            <div className="col-3">
              <Button type="submit" className="btn-add d-flex justify-content-center align-items-center bg-blue">
                SAVE
              </Button>
            </div>
            <div className="col-3">
              <Button className="bg-red" onClick={handleCancel}>CANCEL</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}