import React from 'react'
import './Recommended.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import gentleman1 from '../../assets/gentleman1.png'


const Recommended = () => {
  return (
     <div className='recommended'>
                    <div className='recommended-video-content'>
                        <div className='recommended-video-img-container'>
                            <img className='recommended-video-img' src={gentleman1} alt="" />
                        </div>
                        <div className='recommended-video-info'>
                            <h1>Clam Casino - Im God extended vocal loop with enhancements</h1>
                            <p>SubjectOmega</p>
                            <p>558K views &bull; 5 years ago</p>
                        </div>
                        <BsThreeDotsVertical className='recommended-three-dot' size={30} />
                    </div>
                    <div className='recommended-video-content'>
                        <div className='recommended-video-img-container'>
                            <img className='recommended-video-img' src={gentleman1} alt="" />
                        </div>
                        <div className='recommended-video-info'>
                            <h1>Clam Casino - Im God extended vocal loop with enhancements</h1>
                            <p>SubjectOmega</p>
                            <p>558K views &bull; 5 years ago</p>
                        </div>
                        <BsThreeDotsVertical className='recommended-three-dot' size={30} />
                    </div>
                    <div className='recommended-video-content'>
                        <div className='recommended-video-img-container'>
                            <img className='recommended-video-img' src={gentleman1} alt="" />
                        </div>
                        <div className='recommended-video-info'>
                            <h1>Clam Casino - Im God extended vocal loop with enhancements</h1>
                            <p>SubjectOmega</p>
                            <p>558K views &bull; 5 years ago</p>
                        </div>
                        <BsThreeDotsVertical className='recommended-three-dot' size={30} />
                    </div>
                    <div className='recommended-video-content'>
                        <div className='recommended-video-img-container'>
                            <img className='recommended-video-img' src={gentleman1} alt="" />
                        </div>
                        <div className='recommended-video-info'>
                            <h1>Clam Casino - Im God extended vocal loop with enhancements</h1>
                            <p>SubjectOmega</p>
                            <p>558K views &bull; 5 years ago</p>
                        </div>
                        <BsThreeDotsVertical className='recommended-three-dot' size={30} />
                    </div>
            </div>
  )
}

export default Recommended