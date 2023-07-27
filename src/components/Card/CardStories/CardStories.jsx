import React from 'react'
import './CardStories.css'
import { useNavigate } from 'react-router-dom'

function CardStories({id,image,title,synopsis,paragraph,url}) {

  let navigate = useNavigate()

  return (
    <div className='cardStories'>
        <img onClick={()=>{navigate("/article",{state:{id,image,title,synopsis,paragraph,url}})}} src={image} />
        <h4 onClick={()=>{navigate("/article",{state:{id,image,title,synopsis,paragraph, url}})}}>{title}</h4>
    </div>
 
  )
}

export default CardStories