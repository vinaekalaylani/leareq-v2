import { Form } from "react-bootstrap"

export default function DetailComp({ user }) {
  return (
    <div className="card shadow">
      <div className="card-body row ms-1" style={{ fontSize: "14px" }}>
        <div className="row d-flex align-items-center mb-2">
          <Form.Label className="col-5">Name</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={user.fullName || ""}
          />
        </div>
        <div className="row d-flex align-items-center mb-2">
          <Form.Label className="col-5">Email</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={user.email || ""}
          />
        </div>
        <div className="row d-flex align-items-center mb-2">
          <Form.Label className="col-5">Position</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={user.position || ""}
          />
        </div>
        <div className="row d-flex align-items-center mb-2">
          <Form.Label className="col-5">Level</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={user.level === 0 ? "Staff" : "Superior" || ""}
          />
        </div>
        {
          user.reportingManager && (
            <div className="row d-flex align-items-center mb-2">
              <Form.Label className="col-5">Reporting Manager</Form.Label>
              <Form.Control
                className="col-7"
                disabled={true}
                value={user.reportingManager || ""}
              />
            </div>
          )
        }
        {
          user.aditionalManager  && (
            <div className="row d-flex align-items-center mb-2">
              <Form.Label className="col-5">Aditional Manager</Form.Label>
              <Form.Control
                className="col-7"
                disabled={true}
                value={user.aditionalManager || ""}
              />
            </div>
          )
        }
        <div className="row d-flex align-items-center mb-2">
          <Form.Label className="col-5">Leave</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={user.leaveAvailable || ""}
          />
        </div>
      </div>
    </div>
  )
}