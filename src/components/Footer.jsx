import GitHubLogo from '../assets/rrss-GitHub.svg'
import LinkedinLogo from '../assets/rrss-Linkedin.svg'
import Logo from '../assets/Logo.svg'

import './Footer.css'

export default function Footer() {


    return (
        <div className="container-footer">

            <div className="container-section">
                <div className="logo-copyRigth">
                    <img src={Logo} alt="" />
                    <p>daasjkdlaslkjdlajslkdjlkas</p>
                </div>

                <div className="container-social-network-footer">
                    <img src={GitHubLogo} alt="" />
                    <img src={LinkedinLogo} alt="" />
                </div>
            </div>

        </div>
    )
}