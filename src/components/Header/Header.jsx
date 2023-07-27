import React from 'react'
import './Header.css'
import CCG from "./imgHeader/CCG.jpg"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='backgroundImage'>
             <Link to="/"><img className='header-CCG' src={CCG} /></Link>
            <div className='header-name'>
                <h1>Christian Carbajo</h1>
                <h3>Escritor/Programador Web/Músico</h3>
            </div>
    </div>
  )
}

export default Header