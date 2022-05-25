import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getUsers } from '../store/action'
import EmployeesComp from "../components/employees";
import Sidebar from "../components/sidebar";

export default function Employees () {
  const [fullName, setFullName] = useState("")
  const [deleted, setDeleted] = useState(false)
  const { users, user } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers({fullName, deleted})) // eslint-disable-next-line
  }, [fullName, deleted])

  return (
    <div className="d-xl-block d-none">
      <Sidebar/>
      <EmployeesComp users={users} user={user} fullName={fullName} deleted={deleted} setFullName={setFullName} setDeleted={setDeleted}/>
    </div>
  )
}