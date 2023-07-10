import GitHubLogo from '../assets/rrss-GitHub.svg'
import LinkedinLogo from '../assets/rrss-Linkedin.svg'
import Logo from '../assets/Logo.svg'
import Heart from '../assets/heart.svg'

import './Footer.css'

export default function Footer() {


    return (
        <div className="container-footer">

            <div className="container-section">
                <div className="logo-copyRigth">
                    <img src={Logo} alt="" />
                    <p className='hecho-por'>Hecho con <img src={Heart} alt="" /> por mi en 2023
                    </p>
                </div>

                <div className="container-social-network-footer">
                    <img src={GitHubLogo} alt="" />
                    <img src={LinkedinLogo} alt="" />
                </div>
            </div>

        </div>
    )
}