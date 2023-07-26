import React from 'react'
import './CardStories.css'


function CardStories({image, title}) {

  return (
    <div className='cardStories'>
        <img src={image} />
        <h4>{title}</h4>
    </div>
  )
}

export default CardStories