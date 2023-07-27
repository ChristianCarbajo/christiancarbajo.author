import React from 'react'
import { useLocation } from 'react-router-dom'
import './Article.css'

const Article = () => {

  const idInState = useLocation().state.id
  const titleInState = useLocation().state.title
  const synopsisInState = useLocation().state.synopsis
  const paragraphInState = useLocation().state.paragraph
  const imageInState = useLocation().state.image
  const urlInState = useLocation().state.url


  return (
    <div className='article'>
      <div className='book'>
        <img src={imageInState} />
        <div>
          <h2>{titleInState}</h2>
          <p>{synopsisInState}</p>

          {!urlInState ? 
          (<>
            <button>Amazon</button>
          <button>Agapea</button>
          <button>Cervantes</button>
          </>) : null}

        </div>
      </div>
      <p>{paragraphInState}</p>
    </div>
  )
}

export default Article
