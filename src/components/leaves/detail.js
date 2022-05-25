import { Button, Form } from "react-bootstrap"
import { useDispatch } from 'react-redux'

import { getLeaves, updateStatus } from "../../store/action";
import { alertSuccess, alertError } from '../../apis/swal';

export default function DetailComp({ leave, level }) {
  const dispatch = useDispatch()

  const handleStatus = async (id, status) => {
    dispatch(updateStatus({ status, id }))
      .then(() => {
        dispatch(getLeaves())
        alertSuccess("Success!!")
      })
      .catch((err) => {
        alertError(err)
      })
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body row ms-1" style={{ fontSize: "14px" }}>
        <div className="row d-flex align-items-center">
          <Form.Label className="col-5">Name</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.User?.fullName || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Email</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.User?.email || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Position</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.User?.position || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Reporting Manager</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.User?.reportingManager || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Aditional Manager</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.User?.aditionalManager || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Type</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.type || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Day type</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.dayType || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Date From</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.dateFrom || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Date To</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.dateTo || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Total Days</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.totalDays || ""}
          />
        </div>
        <div className="row mt-2 d-flex align-items-center">
          <Form.Label className="col-5">Reason</Form.Label>
          <Form.Control
            className="col-7"
            disabled={true}
            value={leave?.reason || ""}
          />
        </div>
        {
          leave && (
            <div className="row mt-2 d-flex align-items-center">
              <Form.Label className="col-5 mt-1" style={{ marginRight: "-14px" }}>Status</Form.Label>
              {leave.status === 0 ? (
                <h2 className="col-2"><span className="badge badge-primary">Pending</span></h2>
              ) : (leave.status === 1 ? (
                <h2 className="col-2"><span className="badge badge-success">Approved</span></h2>
              ) : (
                <h2 className="col-2"><span className="badge badge-danger">Rejected</span></h2>
              )
              )}
            </div>
          )
        }
        {leave && leave.status === 0 && level === "1" && (
          <div className="row d-flex justify-content-center" style={{ marginTop: "20px" }}>
            <div className="col-3">
              <Button className="btn d-flex justify-content-center align-items-center bg-blue"
                onClick={() => handleStatus(leave.id, 1)} >
                Approved
              </Button>
            </div>
            <div className="col-3">
              <Button className="btn d-flex justify-content-center align-items-center bg-red"
                onClick={() => handleStatus(leave.id, 2)} >
                Rejected
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}