import { VFC } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout: VFC = () => {
  return (
    <div className="flex items-center flex-col w-screen h-screen text-gray-600 font-mono">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Layout
