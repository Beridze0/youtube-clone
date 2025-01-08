import React, { useState } from 'react'
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

        const toggleOptions = () =>{
            setIsOpen(prev => !prev)
        }

  return (
    <div className='navbar'>
        <div className='navbar-options'>
            <div className='navbar-left-side'>
                <LuMenu onClick={toggleSidebar} size={21} className='navbar-menu-icon' />
                <Link to={'/'}><ImYoutube2 size={65} className='navbar-logo' /></Link>
            </div>
            <div className='navbar-search'>
                <div className='navbar-search-container'>
                    <input type="text" placeholder='Search' className='navbar-search-input' />
                    <FiSearch />
                </div>
                <PiMicrophoneFill className='navbar-mic' size={23} />
            </div>
            <div className='navbar-right-side'>
                <button className='navbar-create-btn'><AiOutlinePlus size={20} /> Create</button>
                <IoMdNotificationsOutline size={23} className='navbar-notification-icon' />
                <div className='navbar-options'>
                    <CgProfile onClick={toggleOptions} size={20} className='navbar-profile-icon' />
                    { isOpen && <Options setIsOpen={setIsOpen} isOpen={isOpen} /> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar