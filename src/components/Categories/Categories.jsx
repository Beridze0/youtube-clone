import React from 'react'
import './Categories.css'

const Categories = ({category, styles}) => {
  return (
    <div className='categories-item' style={styles}>
        <p>{category}</p>
    </div>
  )
}

export default Categories