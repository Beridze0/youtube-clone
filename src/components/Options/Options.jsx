import React, { useEffect, useRef, useState } from 'react'
import './Options.css'
import { CgProfile } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { HiLanguage } from "react-icons/hi2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Options = ({isOpen, setIsOpen, darkMode, handleDarkMode, toggleOptions}) => {


    const menuRef = useRef(null)

    


    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }

        return () => {
            body.style.overflow = '';
        };
    }, [isOpen]);


    
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setTimeout(()=>{
                setIsOpen(false)
            },150);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    

  return (
    <div ref={menuRef} className='options'>
        
        <div className='options-account-details'>
            <div className='options-account-profile-info'>
                <div>
                    <CgProfile size={30} />
                </div>
                <div>
                    <p className='options-account-fullname'>Davit Beridze</p>
                    <p>davitberidze@gmail.com</p>
                </div>     
            </div>
            
            <div className='options-account-create-channel'>
                <p className='create-channel'>Create a channel</p>
            </div>
        </div>

    
        <div className='options-container-top'>
            <div className='options-container'>
                <div className='options-item'>
                    <FaGoogle size={20} />
                    <p>Google Account</p>
                </div>
                <div className='options-item'>
                    <MdOutlineSwitchAccount size={22} />
                    <p>Switch Account</p>
                </div>
                <div className='options-item'>
                    <PiSignOut size={22} />
                    <p>Sign out</p>
                </div>
            </div>

            <div className='options-container'>
                <div className='options-item'>
                    <SiYoutubestudio size={22} />
                    <p>YouTube Studio</p>
                </div>
                <div className='options-item'>
                    <RiMoneyDollarCircleLine size={22} />
                    <p>Purhcases and memberships</p>
                </div>
            </div>

            <div className='options-container'>
                <div className='options-item'>
                    <FaDatabase size={22} />
                    <p>Your data in YouTube</p>
                </div>
                <div className='options-item' onClick={handleDarkMode}>
                    <IoMoonOutline size={22} />
                    <p>
                        Appearance: {darkMode ? 'Dark' : 'Light'}
                    </p>
                </div>
                <div className='options-item'>
                    <HiLanguage size={22} />
                    <p>Language: English</p>
                </div>
                <div className='options-item'>
                    <MdOutlineAdminPanelSettings size={25} />
                    <p>Restricted Mode: Off</p>
                </div>
                <div className='options-item'>
                    <SlGlobe size={22} />
                    <p>Location: Georgia</p>
                </div>
                <div className='options-item'>
                    <FaRegKeyboard size={22} />
                    <p>Keyboard shortcuts</p>
                </div>
            </div>

            <Link to={'account'} className='options-container'>
                <div className='options-item item-with-link'>
                    <IoSettingsOutline size={22} />
                    <p>Settings</p>
                </div>
            </Link>

            <div className='options-container options-container-last'>
                <div className='options-item'>
                    <MdHelpOutline size={22} />
                    <p>Help</p>
                </div>
                <div className='options-item'>
                    <MdOutlineFeedback size={22} />
                    <p>Send feedback</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Options