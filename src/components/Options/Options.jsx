import React from 'react'
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
import { FaUserShield } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";

const Options = () => {
  return (
    <div className='options'>
        <div className='options-account-details'>
            <div className='options-account-profile-icon'>
                <CgProfile />
            </div>
            <div className='options-account-profile-info'>
                <p>Davit Beridze</p>
                <p>davitberidze@gmail.com</p>
                <p>Create a channel</p>
            </div>
        </div>

        <div className='options-accounts'>

        </div>
    </div>
  )
}

export default Options