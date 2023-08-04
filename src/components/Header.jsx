import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.svg'
import LinkedinLogo from '../assets/rrss-Linkedin.svg'
import GitHubLogo from '../assets/rrss-GitHub.svg'

import "./Header.css"


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleSizeVH = () => {
        if (window.innerWidth > 800) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    useEffect(() => {

        handleSizeVH()

        window.addEventListener('resize', handleSizeVH)

        return () => {
            window.removeEventListener('resize', handleSizeVH)
        }


    }, [])

    return (
        <div className={`container-header ${isOpen ? 'open' : ''}`}>
            <div className="container-logo">
                <a href="#aboutme">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="container-middle-section">
                <ul className="container-nav">
                    <li className="nav-section">
                        <a className='link' href='#aboutme'> Sobre mi </a>
                    </li>
                    <li className="nav-section">
                        <a className='link' href='#proyects'> Proyectos </a>
                    </li>
                    <li className="nav-section">
                        <a className='link' href='#contactme'> Contactame </a>
                    </li>
                </ul>
            </div>
            <div className="container-social-network">
                <a href="https://www.linkedin.com/in/matias-bua/" target='_blank'>
                    <img src={LinkedinLogo} alt="" />
                </a>
                <a href="https://github.com/MatiasNBua" target='_blank'>
                    <img src={GitHubLogo} alt="" />
                </a>
            </div>

        </div>
    )
}