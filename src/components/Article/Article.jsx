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
  const buyInState = useLocation().state.buy

  return (
    <div className='article'>
      <div className='article-book'>
        <img className='article-book-frontPage' src={imageInState} />
        <div className='article-titleSynopBuy'>
          <h2>{titleInState}</h2>
          <p>{synopsisInState}</p>

          {!urlInState && buyInState ?
            (<div className='article-book-shop'>
              {buyInState[0].explication ? <h3>{buyInState[0].explication}</h3> : null}
              {buyInState[0].amazon && <a target='_blank' href={buyInState[0].amazon}><img src={AmazonLogo} alt="Amazon" /></a>}
              {buyInState[0].cervantes && <a target='_blank' href={buyInState[0].cervantes}><img src={CervantesLogo} alt="Cervantes" /></a>}
            </div>) : <a href={urlInState} target='_blank'><img className='article-book-pdf' src={PdfLogo}/></a>
            } 

        </div>
      </div>
      <p className='article-paragraph'>{paragraphInState}</p>
    </div>
  )
}

export default Article
