'use client'
import BottomNav from '../components/bottom-nav'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
const Layout = ({ children }) => {
  return (
    <div className='flex flex-row-reverse h-screen'>
      {/* Sidebar */}
      <Sidebar />
      <Header />
      {/* Main Content Area with Scroll */}
      <BottomNav />
      <div className='flex-1 overflow-y-auto  mt-14 md:mt-14 lg:mt-2'>
        {children}
      </div>
    </div>
  )
}
export default Layout
