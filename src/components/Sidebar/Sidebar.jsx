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
import { NavLink } from 'react-router-dom';

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
    <div className='sidebar' style={styles}>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `${isExpanded ? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'} ${isActive ? 'active' : ''}`
    }
  >
    <MdHome size={24} />
    <p>Home</p>
  </NavLink>
  <NavLink
    to="/shorts"
    className={({ isActive }) =>
      `${isExpanded ? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'} ${isActive ? 'active' : ''}`
    }
  >
    <SiYoutubeshorts size={21} />
    <p>Shorts</p>
  </NavLink>
  <NavLink
    to="/subscriptions"
    className={({ isActive }) =>
      `${isExpanded ? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'} ${isActive ? 'active' : ''}`
    }
  >
    <MdOutlineSubscriptions size={23} />
    <p>Subscriptions</p>
  </NavLink>

  {isExpanded ? (
  <div className="sidebar-menu-item-expanded-extras">
    {/* You */}
    <div className="sidebar-menu-item-expanded-extras-you">
      <NavLink
        to="/you"
        className={({ isActive }) =>
          `sidebar-menu-item-extra sidebar-you ${isActive ? 'active' : ''}`
        }
      >
        <h2>You</h2>
        <MdKeyboardArrowRight size={20} />
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <VscHistory size={22} />
        <p>History</p>
      </NavLink>
      <NavLink
        to="/playlists"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <RiPlayListLine size={22} />
        <p className="sidebar-menu-playlist">Playlists</p>
      </NavLink>
      <NavLink
        to="/watch-later"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <GoClock size={23} />
        <p>Watch later</p>
      </NavLink>
      <NavLink
        to="/liked-videos"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <BiLike size={23} />
        <p>Liked videos</p>
      </NavLink>
    </div>

    {/* Explore */}
    <div className="sidebar-menu-item-expanded-extras-explore">
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          `sidebar-menu-item-extra sidebar-explore ${isActive ? 'active' : ''}`
        }
      >
        <h2>Explore</h2>
        <MdKeyboardArrowRight size={20} />
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <IoIosTrendingUp size={22} />
        <p>Trending</p>
      </NavLink>
      <NavLink
        to="/music"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <IoMusicalNotesOutline size={22} />
        <p>Music</p>
      </NavLink>
      <NavLink
        to="/gaming"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <SiYoutubegaming size={23} />
        <p>Gaming</p>
      </NavLink>
      <NavLink
        to="/sports"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <HiOutlineTrophy size={23} />
        <p>Sports</p>
      </NavLink>
    </div>

    {/* More from YouTube */}
    <div className="sidebar-menu-item-expanded-extras-more">
      <NavLink
        to="/premium"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <FaYoutube size={22} />
        <p>YouTube Premium</p>
      </NavLink>
      <NavLink
        to="/music-app"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <SiYoutubemusic size={22} />
        <p>YouTube Music</p>
      </NavLink>
      <NavLink
        to="/kids"
        className={({ isActive }) =>
          `sidebar-menu-item-extra ${isActive ? 'active' : ''}`
        }
      >
        <SiYoutubekids size={23} />
        <p>YouTube Kids</p>
      </NavLink>
    </div>
  </div>
) : (
    <div className={isExpanded ? 'sidebar-menu-item-expanded' : 'sidebar-menu-item'}>
      <CgProfile size={23} />
      <p>You</p>
    </div>
  )}
</div>

  )
}

export default Sidebar