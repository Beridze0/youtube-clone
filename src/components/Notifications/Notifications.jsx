import React, { useEffect, useRef, useState } from 'react'
import './Notifications.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";


const Notifications = ({setIsNotificationOpen, isNotificationOpen}) => {

    const [isNotification, setIsNotification] = useState(false)
    
    const menuRef = useRef(null)
    
        
    
    
        useEffect(() => {
            const body = document.querySelector('body');
            console.log('isNotificationOpen:', isNotificationOpen);
            if (isNotificationOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
    
            return () => {
                body.style.overflow = '';
            };
        }, [isNotificationOpen]);
    
    
        

        
       useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setTimeout(() => {
                setIsNotificationOpen(false);
            }, 150);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [setIsNotificationOpen]);

        

  return (
    <div className='notifications' ref={menuRef}>
        <div className='notifications-header'>
            <h1>Notifications</h1>
            <IoSettingsOutline size={21} className='notifications-settings' />
        </div>
        <div className='notifications-container'>
            {
                !isNotification? 
                    <div className='empty-notifications'>
                        <IoMdNotificationsOutline size={130} className='notifications-bell-icon' />
                        <p className='notifications-text-big'>Your notifications live here</p>
                        <p className='notifications-text'>Subscribe to your favorite channels to get notified about their latest videos.</p>
                    </div> :

                    <div className='notification-message'>
                        <p>There is one notification</p>
                    </div>
            }
            
        </div>
    </div>
  )
}

export default Notifications