import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import React from 'react'
import Article from '../../Article/Article'
import Navbar from '../../Navbar/Navbar'

function ArticlePage() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Article />
      <Footer />
    </div>
  )
}

export default ArticlePage