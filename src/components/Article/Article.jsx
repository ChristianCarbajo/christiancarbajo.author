import React from 'react'
import { useLocation } from 'react-router-dom'
import './Article.css'
import AmazonLogo from './articleImg/Amazon-logo.png'
import AgapeaLogo from './articleImg/Circulo-logo-agapea.png'
import CervantesLogo from './articleImg/LogoCervantes.jpg'
import PdfLogo from './articleImg/PDF_file_icon.svg.png'

const Article = () => {

  const titleInState = useLocation().state.title
  const synopsisInState = useLocation().state.synopsis
  const paragraphInState = useLocation().state.paragraph
  const imageInState = useLocation().state.image
  const urlInState = useLocation().state.url


  return (
    <div className='article'>
      <div className='article-book'>
        <img className='article-book-frontPage' src={imageInState} />
        <div>
          <h2>{titleInState}</h2>
          <p>{synopsisInState}</p>

          {!urlInState ?
            (<div className='article-book-shop'>
              
              <a href='/'><img src={AmazonLogo}/></a>
              <a href='/'><img src={AgapeaLogo}/></a>
              <a href='/'><img src={CervantesLogo}/></a>
            </div>) : <a href={urlInState} target='_blank'><img className='article-book-pdf' src={PdfLogo}/></a>
            } 

        </div>
      </div>
      <p className='article-paragraph'>{paragraphInState}</p>
    </div>
  )
}

export default Article
