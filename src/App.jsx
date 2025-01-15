import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Category/Category'
import VideoPage from './pages/VideoPage/VideoPage'
import Settings from './pages/Settings/Settings'
import SettingsNotifications from './components/SettingsNotifications/SettingsNotifications'
import SettingsList from './components/SettingsList/SettingsList'

const App = () => {

  

  const location = useLocation()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  const sidebarVisible = location.pathname === '/'
  const categoriesVisible = location.pathname != '/'
  const settingsListVisible = location.pathname.includes('/account')

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
        {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />}
        <div className={!categoriesVisible? "vertical" : "horizontal"}  style={styles}>
          {!categoriesVisible && <Category /> }
          {settingsListVisible && <SettingsList />}
          <Routes>
            <Route path='/' element={<Home isSidebarExpanded={isSidebarExpanded} />} />
            <Route path='/watch/1' element={<VideoPage />} />
            <Route path='/account' element={<Settings />} >
              <Route path='/account_notifications' element={<SettingsNotifications />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App