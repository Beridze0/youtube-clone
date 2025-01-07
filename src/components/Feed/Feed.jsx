import React from 'react'
import './Feed.css'
import photo from '../../assets/1.jpeg'

const Feed = () => {
  return (
    <div className='feed'>
        <div className='feed-video-item'>
            <img className='feed-video-item-img' src={photo} alt="" />
        </div>
    </div>
  )
}

export default Feed