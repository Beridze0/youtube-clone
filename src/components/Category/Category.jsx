import React from 'react'
import './Category.css'
import Categories from '../Categories/Categories'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Category = () => {

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
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        "DIY & Crafts",
        "Travel",
        ];

  return (
    <div className='categories-container-top'>
        <MdOutlineKeyboardArrowLeft className='category-arrow'  size={25}/>
        <div className='categories-container'>
            <div className='categories'>
                {
                    categories.map((category, index)=>(
                        <Categories key={index} category={category}  />
                    ))
                }
            </div>
        </div>
        <MdOutlineKeyboardArrowRight className='category-arrow'  size={25} />
    </div>
  )
}

export default Category