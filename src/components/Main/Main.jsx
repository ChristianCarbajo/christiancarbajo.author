import React from 'react'
import CardBook from '../Card/CardBook/CardBook'
import dataBook from '../Data/DataBooks.json'
import dataStories from '../Data/DataStories.json'
import './Main.css'
import CardStories from '../Card/CardStories/CardStories'
import { Element } from 'react-scroll'



const Main = () => {




  return (
    <div className='main'>

      <div className='titles'>
        <div className='titles-lineBar'></div>
        <h2>Libros</h2>
        <div className='titles-lineBar'></div>
      </div>

      <div className='booksContainer'>
        {dataBook.map((index) => (

          <CardBook
            key={index.id}
            title={index.title}
            synopsis={index.synopsis}
            paragraph={index.paragraph}
            image={index.image}
            buy={index.buy} />))}
      </div>

      <div className='titles'>
        <div className='titles-lineBar'></div>
        <h2>Relatos cortos</h2>
        <div className='titles-lineBar'></div>
      </div>

      <Element name="stories">
        <div className='storiesContainer'>
          {dataStories.map((index) => (
            <CardStories
              key={index.id}
              title={index.title}
              synopsis={index.synopsis}
              paragraph={index.paragraph}
              image={index.image}
              url={index.url}
            />))}
        </div>
      </Element>
    </div>
  )
}

export default Main