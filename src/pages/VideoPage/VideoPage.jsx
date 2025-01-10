import React from 'react'
import './VideoPage.css'
import gentleman1 from '../../assets/gentleman1.png'
import { GiRamProfile } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const VideoPage = () => {
  return (
    <div className='video-page-container'>
        <div className='video-page-content'>
            <div className='video-player-container'>
                <img src={gentleman1} alt="Video thumbnail" />
            </div>

            <div className='video-info-section'>
                <div className='video-info'>
                    <div className='video-title'>
                        <h1>Lebanon Hanover - Gallowdance</h1>
                    </div>
                    <div className='channel-info'>
                        <div className='channel-avatar'>
                            <GiRamProfile />
                        </div>
                        <div className='channel-details'>
                            <p>Krisis Und Kritik</p>
                            <p>2.81K subscribers</p>
                        </div>
                        <div className='channel-subscribe-section'>
                            <button className='subscribe-button'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='video-actions'>
                    <button></button>
                </div>
            </div>

            <div className='comments-section'>

            </div>
        </div>
    </div>
  )
}

export default VideoPage
