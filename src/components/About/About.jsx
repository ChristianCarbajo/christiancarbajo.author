import React from 'react'
import CCG from './CCG.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about'>
          <img src={CCG}/>
          <div>
          <h2>Sobre mi</h2>
            <p>
            Christian Carbajo García nació en 1989 en Puente de Órbigo (León), es el mayor de dos hermanos. Creció en el seno de una familia 
            española con escasos recursos económicos. Comenzó con sus primeros relatos cortos a la edad de 15 años. Gran aficionado de la novela 
            épica fantástica medieval y de la historia medieval, sobre todo la relacionada con el Reino de León, además de ser aficionado al manga,
             anime y series de ciencia ficción. 
             Ha participado en varios concursos de relatos y microrrelatos llegando a ser finalista en varios de ellos. 
            </p> 
            <p>Fue músico profesional durante seis años, ha sido dueño de la librería "Okaeri Nasai", ha participado como colaborador en la RPA y 
              es el cofundador del podcast “Docendo Discimus”. Actualmente es Coformador en Factoría F5, enseñando programación y ayudando a
              personas vulnerables a entrar en el sector IT.
              </p>
              <p>Es autor de la novela “Evolutionis finis temporum” y ya está trabajando en 
              su segunda novela, "Amanecer galáctico".
            </p>
            </div>
        </div>
  )
}

export default About