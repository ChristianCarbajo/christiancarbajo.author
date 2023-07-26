import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navBar'>
            <Link to="/about"><p>¿Quién soy?</p></Link>
            <Link to="/"><p>Libros publicados</p></Link>
            <Link to="/"><p>Escribiendo</p></Link>
            <Link to="/"><p>Relatos cortos</p></Link>
        </div>
    )
}

export default Navbar