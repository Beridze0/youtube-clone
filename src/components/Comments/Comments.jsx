import React, { useRef, useState } from 'react'
import "./Comments.css"
import { MdOutlineSort } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi";


const Comments = () => {

    
        const inputRef = useRef(null)
    
        const [openAddComment, setOpenAddComment] = useState(false)

     const toggleAddComment = () =>{
            setOpenAddComment(prev => !prev)
            setTimeout(() => {
                if (!openAddComment && inputRef.current) {
                    inputRef.current.focus({preventScroll: true});
                }
            }, 150);
        }

  return (
    <div className='comments-section'>
        <div className='comment-count'>
            <h1>1,388 Comments</h1>
            <div className='sort-by'>
                <MdOutlineSort size={26} />
                <p>Sort By</p>
            </div>
        </div>

        {
            openAddComment? 
            <div className='opened-add-comment'>
                <p>Commenting as</p>
                <div className='comment-your-profile-container'>
                    <div className='comment-your-profile'>
                        <GiRamProfile className='channel-avatar-img' size={30} />
                        <div className='comment-your-profile-name'>
                            <p>Lorem Ipsum</p>
                            <p>@Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='add-comment-input-container'>
                        <input ref={inputRef} className='add-comment-input' type="text" placeholder='Add a comment...' />
                    </div>
                    <div className='add-comment-btn'>
                        <button className='comment-cancel-btn' onClick={toggleAddComment}>Cancel</button>
                        <button className='comment-comment-btn' disabled>Comment</button>
                    </div>
                </div>
            </div>
            :
            <div className='add-comment' onClick={toggleAddComment}>
                <div className='channel-avatar'>
                    <GiRamProfile className='channel-avatar-img' size={30} />
                </div>
                <div className='add-comment-input-container'>
                    <input className='add-comment-input' type="text" placeholder='Add comment...' />
                </div>
            </div> 
            
            

        }
    </div>
  )
}

export default Comments