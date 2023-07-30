import React from 'react'
import DataBooksPublished from '../Data/DataBooksPublished.json'
import CardBook from '../Card/CardBook/CardBook'
import './BooksPublished.css'

function BooksPublished() {
    return (
        <div className='booksPublished'> 
            <h2>Libros Publicados</h2>
            <p>Actualmente solo tengo un libro publicado. Puedes acceder a él clicando sobre la imagen</p>
            {DataBooksPublished.map((index) => (

                <CardBook
                    key={index.id}
                    title={index.title}
                    synopsis={index.synopsis}
                    paragraph={index.paragraph}
                    image={index.image}
                    buy={index.buy} />))}
        </div>

  
  )
}

export default BooksPublished