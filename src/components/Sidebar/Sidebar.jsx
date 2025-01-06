import React from 'react'
import './Sidebar.css'
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import { BiLike } from "react-icons/bi";

const Sidebar = ({isExpanded}) => {

    console.log(isExpanded);
    

  return (
    <div className='sidebar'>
        <div className={isExpanded? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
            <MdHome size={24} />
            <p>Home</p>
        </div>
        <div className={isExpanded? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
            <SiYoutubeshorts size={21}  />
            <p>Shorts</p>
        </div>
        <div className={isExpanded? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
            <MdOutlineSubscriptions size={23} />
            <p>Subscriptions</p>
        </div>
        <div className={isExpanded? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
            <CgProfile size={23} />
            <p>You</p>
        </div>
    </div>
  )
}

export default Sidebar