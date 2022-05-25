import DataTable from 'react-data-table-component'
import { useDispatch } from 'react-redux'
import { getLeave } from '../../store/action';

export default function Table({ history }) {
  const dispatch = useDispatch()
  const columns = [
    {
      name: 'Name',
      maxWidth: '200px',
      selector: row => row.User.fullName,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'isDeleted',
      maxWidth: '150px',
      selector: row => (row.User.isDeleted ? "True" : "False"),
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Date From',
      maxWidth: '150px',
      selector: row => row.dateFrom,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Date To',
      maxWidth: '150px',
      selector: row => row.dateTo,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Type',
      maxWidth: '20px',
      selector: row => row.type,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Total Days',
      maxWidth: '20px',
      selector: row => row.totalDays,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Status',
      maxWidth: '150px',
      selector: row => (
        <span className="badge badge-dot" style={{ color: "black" }}>
          {row.status === 0 ? (
            <div><i className="bg-info"></i> Pending</div>
          ) : (row.status === 1 ? (
            <div><i className="bg-success"></i> Approved</div>
          ) : (
            <div><i className="bg-danger"></i> Rejected</div>
          ))}
        </span>
      ),
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Approved / Rejected By',
      selector: row => row.approvedBy,
      style: {
        fontSize: '14px',
      }
    }
  ]

  const handleClick = state => {
    dispatch(getLeave(state.id))
  };

  return (
    <div className="pt-2">
      <DataTable
        columns={columns}
        data={history}
        noHeader
        defaultSortField="id"
        onRowClicked={handleClick}
        defaultSortAsc={false}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="580px"
        highlightOnHover
      />
    </div>
  )
}