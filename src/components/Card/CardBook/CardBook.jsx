import React from 'react'
import './CardBook.css'

function CardBook({image, title}) {

  return (
    <div className="cardBook">
        <img src={image} />
        <h2>{title}</h2>
    </div>
  )
}

export default CardBook