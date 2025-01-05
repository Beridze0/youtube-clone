import React from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <h1>YOUTUBE</h1>
        </div>
        <div className='navbar-search'>
            <div className='navbar-search-container'>
                <input type="text" placeholder='Search' className='navbar-search-input' />
                <FiSearch />
            </div>
        </div>
        <div className='navbar-profile'>
            <CgProfile />
        </div>
    </div>
  )
}

export default Navbar