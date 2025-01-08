import React from 'react'
import './Feed.css'
import photo from '../../assets/1.jpeg'
import { CgProfile } from "react-icons/cg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Feed = () => {



  return (
    <div className='feed' >
        <Link to={'video/:categoryId/:videoId'} className='feed-video-item'>
            <div className='feed-video-item-img-container'>
                <img className='feed-video-item-img' src={photo} alt="" />
            </div>
            <div className='feed-video-item-info'>
                <div className='feed-video-item-profile'>
                    <CgProfile className='feed-video-item-profile-icon' size={33}/>
                </div>
                <div className='feed-video-item-about'>
                    <b>Cigarettes After Sex Playlist - By Fannzy24</b>
                    <p className='feed-video-item-person'>Fannz</p>
                    <p>219K views </p>
                </div>
                <HiOutlineDotsVertical size={22} />
            </div>
        </Link>
        
    </div>
  )
}

export default Feed