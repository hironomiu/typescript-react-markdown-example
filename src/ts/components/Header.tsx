import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsAuthentication, logout } from '../feature/auth/authSlice'
import * as C from '../config'

const Header: FC = () => {
  const dispatch = useDispatch()
  const isAuthentication = useSelector(selectIsAuthentication)
  return (
    <div>
      <span className="mr-2">{C.SITE_NAME}</span>
      {!isAuthentication ? null : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  )
}

export default Header
