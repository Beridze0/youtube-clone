import React from 'react'
import "./Home.css"
import Feed from '../../components/Feed/Feed'


const Home = ({isSidebarExpanded}) => {

  return (
    <div className='home' >
       <Feed isSidebarExpanded={isSidebarExpanded} />
    </div>
  )
}

export default Home