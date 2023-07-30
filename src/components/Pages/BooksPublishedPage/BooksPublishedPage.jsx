import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import React from 'react'
import BooksPublished from '../../BooksPublished/BooksPublished'
import Navbar from '../../Navbar/Navbar'

function BooksPublishedPage() {
    return (
        <div>
            <Header />
            <Navbar />
            <BooksPublished />
            <Footer />
        </div>
    )
}

export default BooksPublishedPage