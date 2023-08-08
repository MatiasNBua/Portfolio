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
                    <p className='hecho-por'>© 2023 Portfolio by
                    </p>
                </div>

                <div className="container-social-network-footer">
                    <a href="https://www.linkedin.com/in/matias-bua/" target='_blank'>
                        <img src={LinkedinLogo} alt="" />
                    </a>
                    <a href="https://github.com/MatiasNBua" target='_blank'>
                        <img src={GitHubLogo} alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}