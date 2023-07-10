import Logo from '../assets/Logo.svg'
import Online from '../assets/button-Online.svg'
import LinkedinLogo from '../assets/rrss-Linkedin.svg'
import GitHubLogo from '../assets/rrss-GitHub.svg'


import "./Header.css"

export default function Header() {

    return (
        <div className="container-header">
            <div className="container-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="container-middle-section">
                <img src={Online} alt="" />
                <ul className="container-nav">
                    <li className="nav-section">
                        <a href='#aboutme'> Sobre mi </a>
                    </li>
                    <li className="nav-section">
                        <a href='#proyects'> Proyectos </a>
                    </li>
                    <li className="nav-section">
                        <a href='#tecnhologie'> Tecnologias</a>
                        {/* <img src={Toogle} alt="" /> */}
                    </li>
                    <li className="nav-section">
                        <a href='#contactme'> Contactame </a>
                    </li>
                </ul>
            </div>
            <div className="container-social-network">
                <img src={LinkedinLogo} alt="" />
                <img src={GitHubLogo} alt="" />
            </div>
        </div>
    )
}