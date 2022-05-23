import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Hompage from '../components/homepage'
import Sidebar from '../components/sidebar'
import { getUserLogin } from '../store/action'

export default function Dashboard() {
  const { userLogin } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserLogin()) // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Sidebar/>
      <Hompage user={userLogin}/>
    </div>
  )
}