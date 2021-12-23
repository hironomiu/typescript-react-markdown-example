import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectIsAuthentication } from '../feature/auth/authSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthentication = useSelector(selectIsAuthentication)
  const [user, setUser] = useState({ email: '', password: '' })

  useEffect(() => {
    if (isAuthentication) navigate('/')
  })

  const emailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value
    setUser({ ...user, email: value })
  }
  const passwordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value
    setUser({ ...user, password: value })
  }
  return (
    <>
      <div className="mb-4 w-3/5">
        <label
          className="block text-graydarder pt-2 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          placeholder="Email"
          autoFocus={true}
          value={user.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => emailInput(e)}
        />
        <label
          className="block text-gray-darker text-sm pt-2 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          placeholder="********************"
          value={user.password}
          onChange={(e) => passwordInput(e)}
        />
        <button
          type="button"
          className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(login())}
        >
          Login
        </button>
      </div>
    </>
  )
}

export default Login
