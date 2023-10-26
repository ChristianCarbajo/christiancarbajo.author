import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"
import { Link } from 'react-scroll';
import { useState } from 'react';
import HamburgerIcon from './imgNavbar/HamburgerIcon.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    return (
        <div className='navBar'>
            <button  className='navbar-button'>
                <img onClick={toggleMenu} src={HamburgerIcon} alt='icon hamburguer' />
            </button>
            <nav className={`navbar-nav ${isOpen ? "isActive" : ""}`}>
                <NavLink to="/about"><p>¿Quién soy?</p></NavLink>
                <NavLink to="/published"><p>Libros publicados</p></NavLink>
                <NavLink to="/writing"><p>Escribiendo</p></NavLink>
                <Link className="navBar-link"
                    activeClass="active"
                    to="stories"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}><p>Relatos cortos</p></Link>
            </nav>
        </div>
    )
}

export default Navbar