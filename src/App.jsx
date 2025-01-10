import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Category/Category'
import Options from './components/Options/Options'
import Notifications from './components/Notifications/Notifications'
import VideoPage from './pages/VideoPage/VideoPage'

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
      <Navbar {...(sidebarVisible && { toggleSidebar })} />
      <div className='sidebar-with-routes'>
        {
          sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />
        }
        <div className='vertical'  style={styles}>
          {
            !categoriesVisible && <Category /> 
          }
          <Routes>
            <Route path='/' element={<Home isSidebarExpanded={isSidebarExpanded} />} />
            <Route path='/watch/1' element={<VideoPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App