import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getLeaves, getLevel } from "../store/action";
import Sidebar from "../components/sidebar";
import LeavesComp from "../components/leaves"

export default function Leaves () {
  const { leaves, leave } = useSelector(state => state.leaveReducer)
  const { level } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLeaves()) // eslint-disable-next-line
    dispatch(getLevel()) // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Sidebar/>
      <LeavesComp leaves={leaves} leave={leave} level={level}/>
    </div>
  )
}