import Logo from '../assets/Logo.svg'
import Online from '../assets/button-Online.svg'
import UploadingLane from '../assets/uploading-bar-nav.svg'
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
                <div className="container-nav">
                    <div className="nav-section">
                        <p> Sobre mi </p>
                        <img className="uploading-bar" src={UploadingLane} alt="" />
                    </div>
                    <div className="nav-section">
                        <p> Proyectos </p>
                        <img className="uploading-bar" src={UploadingLane} alt="" />
                    </div>
                    <div className="nav-section">
                        <p> Sobre mi </p>
                        <img className="uploading-bar" src={UploadingLane} alt="" />
                    </div>
                    <div className="nav-section">
                        <p> Sobre mi </p>
                        <img className="uploading-bar" src={UploadingLane} alt="" />
                    </div>
                </div>
            </div>
            <div className="container-social-network">
                <img src={LinkedinLogo} alt="" />
                <img src={GitHubLogo} alt="" />
            </div>
        </div>
    )
}