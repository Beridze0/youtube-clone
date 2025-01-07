import React from 'react'
import './HomeCategories.css'

const HomeCategories = ({category}) => {
  return (
  <>
            <div className='home-category-title'>
                <p>{category}</p>
            </div>
  </>
  )
}

export default HomeCategories