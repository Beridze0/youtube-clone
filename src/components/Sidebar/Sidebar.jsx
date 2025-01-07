import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { RiPlayListLine } from "react-icons/ri";
import { IoIosTrendingUp } from "react-icons/io";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineTrophy } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";

const Sidebar = ({isExpanded}) => {

    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
        setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);



  const styles = {
    height: `${screenHeight-65}px`, //65 is navbar Height
    overflowY: isExpanded ? "scroll" : "hidden"
  };
  

  return (
    <div className='sidebar' style={styles} >
        <div className={isExpanded? 'sidebar-menu-item-expanded expanded-home-icon' : 'sidebar-menu-item'}>
            <MdHome size={24} />
            <p>Home</p>
        </div>
        <div className={isExpanded? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
            <SiYoutubeshorts size={21}  />
            <p>Shorts</p>
        </div>
        <div className={isExpanded? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
            <MdOutlineSubscriptions size={23} />
            <p>Subscriptions</p>
        </div>
        {
            isExpanded? 
            <div className='sidebar-menu-item-expanded-extras'>
                {/* You */}
                <div className='sidebar-menu-item-expanded-extras-you'>
                    <div className='sidebar-menu-item-extra sidebar-you'>
                        <h2>You</h2>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <VscHistory size={22} />
                        <p>History</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <RiPlayListLine  size={22} />
                        <p className='sidebar-menu-playlist'>Playlists</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <GoClock size={23} />
                        <p>Watch later</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <BiLike size={23} />
                        <p>Liked videos</p>
                    </div>
                </div>

                {/* Explore */}
                <div className='sidebar-menu-item-expanded-extras-explore'>
                    <div className='sidebar-menu-item-extra sidebar-explore'>
                        <h2>Explore</h2>
                        <MdKeyboardArrowRight size={20} />
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <IoIosTrendingUp size={22} />
                        <p>Trending</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <IoMusicalNotesOutline  size={22} />
                        <p>Music</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <SiYoutubegaming size={23} />
                        <p>Gaming</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <HiOutlineTrophy size={23} />
                        <p>Sports</p>
                    </div>
                </div>

                {/* More from youtube */}
                <div className='sidebar-menu-item-expanded-extras-more'>
                    <div className='sidebar-menu-item-extra sidebar-more'>
                        <h2>More from YouTube</h2>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <FaYoutube size={22} />
                        <p>YouTube Premium</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <SiYoutubemusic  size={22} />
                        <p>YouTube Music</p>
                    </div>
                    <div className='sidebar-menu-item-extra'>
                        <SiYoutubekids size={23} />
                        <p>YouTube Kids</p>
                    </div>
                </div>
            </div> 
            : 
            <div className={isExpanded? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
            <CgProfile size={23} />
            <p>You</p>
        </div>
        }
        
    </div>
  )
}

export default Sidebar