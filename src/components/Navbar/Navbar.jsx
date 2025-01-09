import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";
import { ImYoutube2 } from "react-icons/im";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiMicrophoneFill } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Options from '../Options/Options';
import Notifications from '../Notifications/Notifications';

const Navbar = ({toggleSidebar}) => {

    const categories = [
        "Music",
        "Gaming",
        "News",
        "Sports",
        "Learning",
        "Fashion & Beauty",
        "Science & Technology",
        "Movies",
        "Live",
        "Health & Fitness",
        "Comedy",
        "Entertainment",
        "Kids",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        ];

        const [isOpen, setIsOpen] = useState(false)
        const [isNotificationsOpen, setIsNotificationOpen] = useState(false)
        const [darkMode, setDarkMode] = useState(
            JSON.parse(localStorage.getItem('darkMode')) || false
          );

        const toggleOptions = () =>{
            setIsOpen(prev => !prev)
        }

        const toggleNotifications = () =>{
            setIsNotificationOpen(prev => !prev)
        }

        
          useEffect(() => {
            document.querySelector('body').setAttribute('data-theme', darkMode ? 'dark' : 'light');
          }, [darkMode]);


          const handleDarkMode = () => {
            setDarkMode((prev) => {
              const newMode = !prev;
              localStorage.setItem('darkMode', JSON.stringify(newMode));
              return newMode;
            });
          };

         

  return (
    <div className='navbar'>
        <div className='navbar-options'>
            <div className='navbar-left-side'>
                <LuMenu onClick={toggleSidebar} size={21} className='navbar-menu-icon' />
                <Link to={'/'}><ImYoutube2 size={65} className='navbar-logo' /></Link>
            </div>
            <div className='navbar-search-container'>
                <div className='navbar-search'>
                    <div className='navbar-search-input-container'>
                        <input type="text" placeholder='Search' className='navbar-search-input' />
                    </div>
                    <div className='navbar-search-icon-container'>
                        <FiSearch className='navbar-search-icon' size={20} />
                    </div>
                </div>
                <PiMicrophoneFill className='navbar-mic' size={21} />
            </div>
            <div className='navbar-right-side'>
                <button className='navbar-create-btn'><AiOutlinePlus size={20} /> Create</button>
                <IoMdNotificationsOutline size={23} className='navbar-notification-icon' 
                    onClick={toggleNotifications }
                     />
                {
                    isNotificationsOpen && <Notifications setIsNotificationOpen={setIsNotificationOpen} isNotificationsOpen={isNotificationsOpen} />
                }
                <div className='navbar-options-icon'>
                    <CgProfile onClick={toggleOptions} size={20} className='navbar-profile-icon' />
                    { isOpen && 
                    <Options 
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                        darkMode={darkMode}
                        toggleOptions={toggleOptions}
                        handleDarkMode={handleDarkMode} /> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar