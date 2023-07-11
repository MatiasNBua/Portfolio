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
                <h1>Mi nombre es Matias, soy</h1>
                <ChangeWord words={['Desarrollador', 'Front', 'Back', 'FullStack']} />
                <p className='description-aboutme'>Soy un apasionado de la tecnología desde muy joven. Mi deseo de sumergirme en este
                    emocionante mundo me llevó a tomar un cambio profesional radical:
                    <br />  <b>Profesor de Educación Física a desarrollador
                        Web Full-Stack.</b>
                    <br />Esta decisión me condujo a buscar un BootCamp especializado, donde pude consolidar mis conocimientos
                    existentes y descubrir mi verdadera pasión.
                    <br />
                    Durante el BootCamp, adquirí habilidades sólidas y conocimientos en el desarrollo web. Fue un momento decisivo
                    que confirmó que la carrera de desarrollo web es mi camino para crecer y desarrollarme profesionalmente.
                    <br />
                    Estoy emocionado de seguir ampliando mis horizontes y aprender continuamente en este campo en constante evolución.
                    <br /><br />
                    ¡Estoy listo para enfrentar nuevos desafíos y contribuir al mundo digital con mis habilidades como desarrollador.

                </p>
                <div className="container-buttons-aboutme">
                    <SecondButton text='Copy Email' onClick={copyEmail} />
                    <Button text='Ver CV' onClick={openPDF}/>
                    {/* <button onClick={openPDF}>
                        <a href="../assets/Preguntas frecuentes (1).pdf"> Download </a>
                    </button> */}
                </div>
            </div>
            

            <div className="container-img-aboutme">
                <img src={MyImg} alt="" />
            </div>

            </div> 

            <div className='container-full-bot'>
            <div className="container-technologies">
                <h3 className="h4">Tecnologias adquiridas:</h3>

                <div className="container-slider">
                    <div id="slider"></div>
                </div>
            </div>

            <div className="container-services-quality">
                <div className="services-quality">
                    <div className="title-sevices">
                        <h2>Te ofrezco mis servicios de calidad en:</h2>
                    </div>

                    <div className="services">
                        <img className='serivce' src={ServiceWeb} alt="" />
                        <img className='serivce' src={ServiceWeb} alt="" />
                        <img className='serivce' src={ServiceWeb} alt="" />
                        <img className='serivce' src={ServiceWeb} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </section>

    )
}