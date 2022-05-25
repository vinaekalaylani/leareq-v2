import DataTable from 'react-data-table-component'
import { useDispatch } from 'react-redux'
import Swal from "sweetalert2";
import "./index.css"

import { alertSuccess, alertError } from '../../apis/swal';
import { deleteUser, getUsers, getUser } from '../../store/action';
export default function TableComp({ users, setIsEdit }) {
  const dispatch = useDispatch()

  const handleDelete = async (id) => {
    const data = {
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }

    Swal.fire(data)
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(deleteUser(id))
            .then(() => {
              alertSuccess("Success")
              dispatch(getUsers({ fullName: "", deleted: false }))
            })
            .catch((err) => {
              alertError(err)
            })
        }
      })
  };

  const handleDetail = state => {
    dispatch(getUser(state.id))
  }

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
      name: '',
      maxWidth: '40px',
      position: "fixed",
      allowOverflow: true,
      selector: row => !row.isDeleted ? (
        <div className="dropdown">
          <button className="btn btn-sm btn-icon-only text-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
            <div className="dropdown-item " onClick={() => setIsEdit(true)}>
              <i className="fas fa-edit text-yellow"></i> Edit
            </div>
            <div className="dropdown-item" onClick={() => handleDelete(row.id)}>
              <i className="fas fa-trash text-red"></i>&ensp;Delete
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={users}
      onRowClicked={handleDetail}
      noHeader
      pagination
      fixedHeader
      fixedHeaderScrollHeight="490px"
      highlightOnHover
    />
  )
}