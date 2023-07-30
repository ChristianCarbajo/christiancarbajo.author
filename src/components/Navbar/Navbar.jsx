import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom"
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <div className='navBar'>
            
            <NavLink to="/about"><p>¿Quién soy?</p></NavLink>
            <NavLink to="/published"><p>Libros publicados</p></NavLink>
            <NavLink to="/writing"><p>Escribiendo</p></NavLink>
            <Link className="navBar-link"
              activeClass="active"
              to="stories"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}><p>Relatos cortos</p></Link>
        </div>
    )
}

export default Navbar