import OpenMenu from "../assets/open-menu.svg"
import closeMenu from "../assets/close-menu.svg"
import React, { useState } from 'react'

import './HeaderMovile.css'

export default function HeaderMovile () {
    const [isOpen, setIsOpen] = useState(false)


    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={`container-header-movile ${isOpen ? 'open' : ''}`}>
            <button className="open-menu" onClick={handleOpenMenu}>
                <img src={isOpen ? closeMenu : OpenMenu}
                alt="icons of menu and close menu"
                />
                
            </button>

            {isOpen && 
            
                <div className="container-nav-movile">
                <ul className="container-ul-nav-section">
                    <li className="nav-section">
                        <a className='link' href='#aboutme' onClick={handleOpenMenu}> Sobre mi </a>
                    </li>
                    <li className="nav-section">
                        <a className='link' href='#proyects' onClick={handleOpenMenu}> Proyectos </a>
                    </li>
                    <li className="nav-section">
                        <a className='link' href='#contactme' onClick={handleOpenMenu}> Contactame </a>
                    </li>
                </ul>
                
            </div>
            }
        </div>
    )
}