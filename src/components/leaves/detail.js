import { Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'

import { getLeaves, updateStatus } from "../../store/action";
import { alertSuccess, alertError } from '../../apis/swal';

export default function DetailComp({ leave, level }) {
  const dispatch = useDispatch()

  const handleStatus = async (id, status) => {
    dispatch(updateStatus({ status, id }))
      .then(() => {
        dispatch(getLeaves())
        alertSuccess(status === 1 ? "Request Approved" : "Request Rejected")
      })
      .catch((err) => {
        alertError(err)
      })
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body row ms-1" style={{ fontSize: "14px" }}>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Name<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.User?.fullName || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Email<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.User?.email || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Job Title<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.User?.position || ""}<br />
          </div>
        </div>
        {leave?.user?.reportingManager && (<div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Name<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.User?.reportingManager || ""}<br />
          </div>
        </div>)}
        {leave?.user?.aditionalManager && (<div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Name<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.User?.aditionalManager || ""}<br />
          </div>
        </div>)}
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Type<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.type || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Day Type<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.dayType || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Date From<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.dateFrom || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Date To<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.dateTo || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Total Days<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.totalDays || ""}<br />
          </div>
        </div>
        <div className="h5 row">
          <div className="col-xl-4" style={{ color: "#5C7893" }}>
            <i className="ni business_briefcase-24 mt-4"></i>Reason<br />
          </div>
          <div className="col-xl-8 text-end">
            <i className="ni business_briefcase-24 mt-4"></i>{leave?.reason || ""}<br />
          </div>
        </div>
        {leave && (
          <div className="h5 row">
            <div className="col-xl-4" style={{ color: "#5C7893" }}>
              <i className="ni business_briefcase-24 mt-4"></i>Status<br />
            </div>
            <div className="col-xl-8 text-end">
              {leave.status === 0 ? (
                <h2><span className="badge badge-primary">Pending</span></h2>
              ) : (leave.status === 1 ? (
                <h2><span className="badge badge-success">Approved</span></h2>
              ) : (
                <h2><span className="badge badge-danger">Rejected</span></h2>
              )
              )}
            </div>
          </div>
        )
        }
        {leave && leave.status === 0 && level === "1" && (
          <div className="row d-flex justify-content-center" style={{ marginTop: "20px" }}>
            <div className="col-5">
              <Button className="btn d-flex justify-content-center align-items-center bg-blue"
                onClick={() => handleStatus(leave.id, 1)} >
                Approved
              </Button>
            </div>
            <div className="col-5">
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