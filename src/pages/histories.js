import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getHistory } from "../store/action";
import HistoriesComp from "../components/histories";
import Sidebar from "../components/sidebar";

export default function Histories() {
  const [type, setType] = useState("")
  const [status, setStatus] = useState("")
  const [deleted, setDeleted] = useState(false)
  const [year, setYear] = useState("")
  const { history } = useSelector(state => state.leaveReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistory({type, status, deleted, year})) // eslint-disable-next-line
  }, [type, status, deleted, year])

  return (
    <div className="d-xl-block d-none">
      <Sidebar/>
      <HistoriesComp history={history} type={type} status={status} deleted={deleted} year={year} setType={setType} setStatus={setStatus} setDeleted={setDeleted} setYear={setYear}/>
    </div>
  )
}