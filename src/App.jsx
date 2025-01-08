import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Category/Category'

const App = () => {

  

  const location = useLocation()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const sidebarVisible = location.pathname === '/'
  const categoriesVisible = location.pathname != '/'

  const toggleSidebar = () =>{
    setIsSidebarExpanded(prev => !prev)
  }

  const styles = {
    width : isSidebarExpanded? "80%" : "93%"
}

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar}  />
      <div className='sidebar-with-routes'>
        <Sidebar toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />
        <div className='vertical'  style={styles}>
          {
            !categoriesVisible && <Category /> 
          }
          <Routes>
            <Route path='/' element={<Home isSidebarExpanded={isSidebarExpanded} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App