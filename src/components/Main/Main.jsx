import React from 'react'
import CardBook from '../Card/CardBook/CardBook'
import dataBook  from '../Data/DataBooks.json'
import dataStories from '../Data/DataStories.json'
import './Main.css'
import CardStories from '../Card/CardStories/CardStories'

const Main = () => {


  return (
    <div className='main'>

      <div className='titles'><h2>Libros</h2></div>

      <div className='booksContainer'>
        {dataBook.map((index) => (
        <CardBook 
        key={index.id} 
        title={index.title} 
        synopsis={index.synopsis} 
        paragraph={index.paragraph}  
        image={index.image}
        />))}
      </div>

      <div className='titles'><h2>Relatos cortos</h2></div>
  
      <div className='storiesContainer'>
          {dataStories.map((index) => (
            <CardStories
            key={index.id}
            title={index.title} 
        synopsis={index.synopsis} 
        paragraph={index.paragraph}  
        image={index.image}
        />))}
      </div>

    </div>
  )
}

export default Main