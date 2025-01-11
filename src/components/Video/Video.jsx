import React, { useRef, useState } from 'react'
import './Video.css'
import gentleman1 from '../../assets/gentleman1.png'
import { GiRamProfile } from "react-icons/gi";
import { BiDownload, BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineSort } from "react-icons/md";
import Comments from '../Comments/Comments';

const Video = () => {
    
    const description = `Dance with me the gallowdance As long as we're not hanging
                        As long as we still can my love we both know the string is
                        always ready Dance with me the gallowdance As long as we're not hanging
                        As long as we still can my love we both know the string is
                        always ready Video by: Larissa Iceglass, William Maybelline
                        Cinematography: Lebanon Hanover
                        Music by: Lebanon Hanover
                        Published by: Fabrika Records
                        © 2013 


                        Dance with me the gallowdance
                        As long as we're not hanging
                        As long as we still can my love
                        we both know the string is always ready

                        Dance with me the gallowdance
                        for all the degradation is this land
                        Dance with me the Gallowdance
                        as disorientated as you can`

    const maxLength = 185
    const sliceDescription = description.slice(0, maxLength)

    const [showDescription, setShowDescription] = useState(false)


    const toggleShowDescription = () =>{
        setShowDescription(prev => !prev)
    }

   

  return (
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
                <button className='like-btn'><BiLike size={21} /> 87K</button>
                <button className='dislike-btn'><BiDislike size={21} /> 0</button>
            </div>
            <div className='video-share'>
                <button className='share-btn'><PiShareFatLight size={21} /> Share</button>
            </div>
            <div className='video-download'>
                <button className='download-btn'><BiDownload size={21} /> Download</button>
            </div>
        </div>
    </div>

    <div className='video-description-container' onClick={showDescription? null : toggleShowDescription }>
        <div className='video-views'>
            <p>3M views 11 years ago</p>
        </div>
        <div className='video-description'>
            {
                showDescription? 
                <>
                    <p>{description}</p>
                    <button className='show-less-btn' onClick={toggleShowDescription}>Show less</button>
                </>
                    :
                    <p>
                        {sliceDescription}<button className='description-more' on>...more</button>
                    </p>

            }
        </div>
    </div>

        <Comments />
    
</div>
  )
}

export default Video