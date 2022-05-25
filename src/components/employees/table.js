import DataTable from 'react-data-table-component'
// import { alertSuccess, alertError } from '../../apis/swal';
import "./index.css"
export default function TableComp({ users }) {

  const columns = [
    {
      name: 'Name',
      maxWidth: '200px',
      selector: row => row.fullName,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Email',
      maxWidth: '150px',
      selector: row => row.email,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Position',
      maxWidth: '200px',
      selector: row => row.position,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Level',
      maxWidth: '100px',
      selector: row => row.level === 0 ? "Staff" : "Superior",
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Reporting Manager',
      maxWidth: '200px',
      selector: row => row.reportingManager,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Aditional Manager',
      maxWidth: '200px',
      selector: row => row.aditionalManager,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Action',
      maxWidth: '40px',
      position: "fixed",
      allowOverflow: true,
      selector: row => (
        <div className="dropdown">
          <button className="btn btn-sm btn-icon-only text-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
            <div className="dropdown-item">
              <i className="fas fa-info text-blue"></i>&ensp;&ensp;Detail
            </div>
            <div className="dropdown-item ">
              <i className="fas fa-edit text-yellow"></i> Edit
            </div>
            <div className="dropdown-item ">
              <i className="fas fa-trash text-red"></i>&ensp;Delete
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={users}
      noHeader
      pagination
      fixedHeader
      fixedHeaderScrollHeight="490px"
      highlightOnHover
    />
  )
}