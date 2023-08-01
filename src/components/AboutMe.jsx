import ChangeWord from './ChangeWord'
import Button from './Button'
import SecondButton from './SecondButton'
import MyImg from '../assets/img-mt-desktop3.svg'
import ServiceWeb from '../assets/container-service.svg'
import CV from '../assets/CV-MatiasBua.pdf'

import { useState } from 'react'

import './AboutMe.css'

export default function AboutMe() {
    const [emailCopied, setEmailCopied] = useState('buamatiashd@gmail.com')

    const openPDF = () => {
        window.open(CV)
    }

    return (
        <section id='aboutme' className="container-aboutme">
            <div className="container-full-top">
                <div className="container-title-abaoutme">
                    <h1>Enseñando a programar mi futuro.</h1>
                    <div className="title-changewords">
                        <h2>De profesor a</h2><ChangeWord words={['Desarrollador', 'FullStack']} />
                    </div>
                    <p className='description-aboutme'>
                        ¡Hola!
                        <br />
                        Soy Matias, les presento mi portfolio como un reflejo de mi pasión y dedicación hacia este emocionante sector.
                        <br /><br />
                        Estoy listo para seguir creciendo e innovando, dispuesto a romper fronteras. Mi viaje es una prueba
                        fehaciente de que el cambio audaz y la búsqueda incansable de nuestros sueños pueden llevarnos a alcanzar lo
                        inimaginable.
                    </p>
                    <div className="container-buttons-aboutme">
                        <Button text='Ver CV' onClick={openPDF}/>
                        <SecondButton text='Send Email' />
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
                            <h3>Servicios de calidad en:</h3>
                        </div>

                        <div className="services">
                            <img className='service' src={ServiceWeb} alt="" />
                            <img className='service' src={ServiceWeb} alt="" />
                            <img className='service' src={ServiceWeb} alt="" />
                            <img className='service' src={ServiceWeb} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}