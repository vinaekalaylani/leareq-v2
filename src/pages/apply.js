import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserLogin } from '../store/action'
import ApplyComp from "../components/apply";
import Sidebar from "../components/sidebar";

export default function Apply() {
  const { userLogin } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserLogin()) // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Sidebar/>
      <ApplyComp user={userLogin}/>
    </div>
  )
}