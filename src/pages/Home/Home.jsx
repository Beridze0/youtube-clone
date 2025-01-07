import React from 'react'
import "./Home.css"
import HomeCategories from './components/HomeCategories/HomeCategories';




const Home = ({isSidebarExpanded}) => {

const categories = [
    "Music",
    "Gaming",
    "News",
    "Sports",
    "Learning",
    "Fashion & Beauty",
    "Science & Technology",
    "Movies",
    "Live",
    "Health & Fitness",
    "Comedy",
    "Entertainment",
    "Kids",
    "DIY & Crafts",
    "Travel",
    ];

    const styles = {
        width : isSidebarExpanded? "80%" : "93%"
    }

  return (
    <div className='home'  style={styles}>
        <div className='home-categories-container'>
            <div className='home-categories'>
                {
                    categories.map((category, index)=>(
                        <HomeCategories key={index} category={category} />
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Home