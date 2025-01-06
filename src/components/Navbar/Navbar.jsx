import React from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";
import { ImYoutube2 } from "react-icons/im";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = ({toggleSidebar}) => {
  return (
    <div className='navbar'>
        <div className='navbar-left-side'>
            <LuMenu onClick={toggleSidebar} size={21} className='navbar-menu-icon' />
            <ImYoutube2 size={65} className='navbar-logo' />
        </div>
        <div className='navbar-search'>
            <div className='navbar-search-container'>
                <input type="text" placeholder='Search' className='navbar-search-input' />
                <FiSearch />
            </div>
        </div>
        <div className='navbar-right-side'>
            <IoMdNotificationsOutline size={23} className='navbar-notification-icon' />
            <CgProfile size={20} />
        </div>
    </div>
  )
}

export default Navbar