import React from 'react'
import './Notifications.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";


const Notifications = () => {
  return (
    <div className='notifications'>
        <div className='notifications-header'>
            <h1>Notifications</h1>
            <IoSettingsOutline />
        </div>
        <div className='notifications-container'>
            <IoMdNotificationsOutline size={50} className='notifications-bell-icon' />
            <p className='notifications-text-big'>Your notifications live here</p>
            <p className='notifications-text'>Subscribe to your favorite channels to get notified about their latest videos.</p>
        </div>
    </div>
  )
}

export default Notifications