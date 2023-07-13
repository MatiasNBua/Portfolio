import ChangeWord from './ChangeWord'
import Button from './Button'
import SecondButton from './SecondButton'
import MyImg from '../assets/img-mt-desktop.svg'
import ServiceWeb from '../assets/container-service.svg'
import CV from '../assets/CV-MatiasBua.pdf'

import { useState } from 'react'

import './AboutMe.css'

export default function AboutMe() {
    const [emailCopied, setEmailCopied] = useState('buamatiashd@gmail.com')

    const openPDF = () => {
        window.open(CV)
    }

    const copyEmail = () => {
        navigator.clipboard.writeText(emailCopied)
    }

    return (
        <section id='aboutme' className="container-aboutme">
            <div className="container-full-top">
            <div className="container-title-abaoutme">
                <h1>Mi nombre es Matias.</h1>
                <div className="title-changewords">
                <h1>Soy</h1><ChangeWord words={['Desarrollador', 'Front-end', 'Back-end', 'FullStack']} />
                </div>
                <p className='description-aboutme'>Soy un apasionado de la tecnología desde muy joven. Mi deseo de sumergirme en este
                    emocionante mundo me llevó a tomar un cambio profesional radical:
                    <br />  <b>Profesor de Educación Física a desarrollador
                        Web Full-Stack.</b>
                    <br />Esta decisión me condujo a buscar un BootCamp especializado, donde pude consolidar mis conocimientos
                    existentes y descubrir mi verdadera pasión.
                    <br />
                </p>
                <div className="container-buttons-aboutme">
                    <a className='navigate-services'  href="#services">Conoce más</a>
                    {/* <Button text='Conoce más' onClick={openPDF}/> */}
                
                    <SecondButton text='Copy Email' onClick={copyEmail} />
                </div>
            </div>
            

            <div className="container-img-aboutme">
                <img src={MyImg} alt="" />
            </div>

            </div> 

            <div id='services' className='container-full-bot'>

            <div className="container-services-quality">
                <div className="services-quality">
                    <div className="title-sevices">
                        <h3>Te ofrezco mis servicios de calidad en:</h3>
                    </div>

                    <div className="services">
                        <img className='service' src={ServiceWeb} alt="" />
                        <img className='service' src={ServiceWeb} alt="" />
                        <img className='service' src={ServiceWeb} alt="" />
                        <img className='service' src={ServiceWeb} alt="" />
                    </div>
                </div>
            </div>

            <div className="container-technologies">
                <h4 className="h4">Tecnologias adquiridas:</h4>

                <div className="container-slider">
                    <div id="slider"></div>
                </div>
            </div>

            
            </div>
        </section>

    )
}