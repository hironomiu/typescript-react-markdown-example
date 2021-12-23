import { VFC, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthentication } from '../feature/auth/authSlice'
import Layout from './Layout'
import Login from './Login'
import Home from './Home'

const Index: VFC = () => {
  const navigate = useNavigate()
  const isAuthentication = useSelector(selectIsAuthentication)

  useEffect(() => {
    if (!isAuthentication) navigate('/login')
  }, [isAuthentication, navigate])

  return (
    <div className="flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default Index
