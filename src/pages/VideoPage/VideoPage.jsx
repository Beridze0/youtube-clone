import React, { useRef, useState } from 'react'
import './VideoPage.css'
import Recommended from '../../components/Recommended/Recommended';
import Video from '../../components/Video/Video';

const VideoPage = () => {

    


  return (
    <div className='video-page-container'>
       
                    <Video />
                    <Recommended />
       

    </div>
  )
}

export default VideoPage
