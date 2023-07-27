import React from 'react'
import './CardBook.css'
import { useNavigate } from 'react-router-dom'

function CardBook({image, title,id,synopsis,paragraph}) {

let navigate = useNavigate()


  return (

    <div className="cardBook">
        <img onClick={()=>{navigate("/article",{state:{id,image,title,synopsis,paragraph}})}} src={image} />
        <h2 onClick={()=>{navigate("/article",{state:{id,image,title,synopsis,paragraph}})}}>{title}</h2>
    </div>
  )
}

export default CardBook