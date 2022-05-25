import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getEvent, getUserLogin } from '../store/action'
import Hompage from '../components/homepage'
import Sidebar from '../components/sidebar'

export default function Dashboard() {
  const { userLogin } = useSelector(state => state.userReducer)
  const { event } = useSelector(state => state.leaveReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserLogin()) // eslint-disable-next-line
    dispatch(getEvent()) // eslint-disable-next-line
  }, [])

  return (
    <div className="d-xl-block d-none">
      <Sidebar/>
      <Hompage user={userLogin} event={event}/>
    </div>
  )
}