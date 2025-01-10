import React from 'react'
import './VideoPage.css'
import gentleman1 from '../../assets/gentleman1.png'
import { GiRamProfile } from "react-icons/gi";
import { BiDownload, BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";

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
                            <GiRamProfile className='channel-avatar-img' size={33} />
                        </div>
                        <div className='channel-details'>
                            <p className='channel-name'>Krisis Und Kritik</p>
                            <p className='channel-subscribers'>2.81K subscribers</p>
                        </div>
                        <div className='channel-subscribe-section'>
                            <button className='subscribe-button'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='video-actions'>
                    <div className='like-dislike-container'>
                        <button><BiLike /> 87K</button>
                        <button><BiDislike /> 0</button>
                    </div>
                    <div className='video-share'>
                        <button><PiShareFatLight /> Share</button>
                    </div>
                    <div className='video-download'>
                        <button><BiDownload /> Download</button>
                    </div>
                </div>
            </div>

            <div className='comments-section'>

            </div>
        </div>
    </div>
  )
}

export default VideoPage
