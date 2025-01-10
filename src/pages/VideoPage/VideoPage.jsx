import React, { useState } from 'react'
import './VideoPage.css'
import gentleman1 from '../../assets/gentleman1.png'
import { GiRamProfile } from "react-icons/gi";
import { BiDownload, BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineSort } from "react-icons/md";

const VideoPage = () => {

    const description = `Dance with me the gallowdance As long as we're not hanging
                        As long as we still can my love we both know the string is
                        always ready Dance with me the gallowdance As long as we're not hanging
                        As long as we still can my love we both know the string is
                        always ready`

    const maxLength = 185
    const displayMore = description.length > maxLength
    const sliceDescription = description.slice(0, maxLength)

    const [openAddComment, setOpenAddComment] = useState(false)

    const toggleAddComment = () =>{
        setOpenAddComment(prev => !prev)
    }

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

            <div className='video-description-container'>
                <div className='video-views'>
                    <p>3M views 11 years ago</p>
                </div>
                <div className='video-description'>
                    <p>
                        {sliceDescription}<p className='description-more'>...more</p>
                    </p>
                </div>
            </div>

            <div className='comments-section'>
                <div className='comment-count'>
                    <h1>1,388 Comments</h1>
                    <div className='sort'>
                        <MdOutlineSort />
                        <p>Sort By</p>
                    </div>
                </div>

                {
                    openAddComment? 
                    <div className='add-comment' onClick={toggleAddComment}>
                        <div className='comment-your-profile-icon'>
                            <GiRamProfile />
                        </div>
                        <div className='add-comment-input'>
                            <input type="text" placeholder='Add comment...' />
                        </div>
                    </div> 
                    : 
                    <div className='opened-add-comment'>
                        <p>Commenting as</p>
                        <div className='comment-your-profile'>
                            <GiRamProfile />
                            <div className='comment-your-profile-name'>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className='add-comment-input'>
                                <input type="text" placeholder='Add a comment...' />
                            </div>
                            <div className='add-comment-btn'>
                                <button>Cancel</button>
                                <button>Comment</button>
                            </div>
                        </div>
                    </div>
                    

                }
            </div>

        </div>
    </div>
  )
}

export default VideoPage
