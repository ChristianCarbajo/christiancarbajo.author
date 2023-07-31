import React from 'react'
import './Header.css'
import CCG from "./imgHeader/CCG.jpg"
import { Link } from "react-router-dom"
import X from './imgHeader/X.png'
import Facebook from './imgHeader/Facebook.png'

const Header = () => {
  return (
    <div className='backgroundImage'>
      <Link to="/"><img className='header-CCG' src={CCG} /></Link>
      <div className='header-name'>
        <h1>Christian Carbajo</h1>
        <h3>Escritor/Programador Web/Músico</h3>
        <div className='header-mediaResponsive'>
          <Link target='_blank' to="https://twitter.com/CCGAuthor"><img src={X} className='header-media-XMedia' /></Link>
          <Link target='_blank' to="https://www.facebook.com/ChristianCarbajoOficial"><img className='header-media-FBMedia' src={Facebook} /></Link>
        </div>
      </div>
      <div className='header-media'>
        <Link target='_blank' to="https://twitter.com/CCGAuthor"><img src={X} /></Link>
        <Link target='_blank' to="https://www.facebook.com/ChristianCarbajoOficial"><img className='header-media-FB' src={Facebook} /></Link>
      </div>
    </div>
  )
}

export default Header