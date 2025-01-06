import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {

  const location = useLocation()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const sidebarVisible = location.pathname === '/'

  const toggleSidebar = () =>{
    setIsSidebarExpanded(prev => !prev)
  }

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar}  />
      <div className='sidebar-with-routes'>
        <Sidebar toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App