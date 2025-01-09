import React, { useRef } from 'react'
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
        ];

        const categoriesRef = useRef(null);
    const scrollCategories = (direction) => {
        const scrollAmount = 200;
        if (categoriesRef.current) {
            categoriesRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth',
            });
        }
    };

  return (
    <div className='categories-container-top'>
        <MdOutlineKeyboardArrowLeft className='category-arrow'  size={25}
            onClick={() => scrollCategories('left')}
        />
        <div className='categories-container'>
            <div className='categories' ref={categoriesRef}>
                {
                    categories.map((category, index)=>(
                        <Categories key={index} category={category}  />
                    ))
                }
            </div>
        </div>
        <MdOutlineKeyboardArrowRight className='category-arrow'  size={25}
            onClick={() => scrollCategories('right')}
            />
    </div>
  )
}

export default Category