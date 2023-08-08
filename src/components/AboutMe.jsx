import ChangeWord from './ChangeWord'
import Button from './Button'
import SecondButton from './SecondButton'
import MyImg from '../assets/img-mt-desktop.svg'
import ServiceWeb from '../assets/serviceDeveloper-web.svg'
import ServiceSupport from '../assets/support-manteince.svg'
import ServiceApi from '../assets/gestion-api.svg'
import ServiceDessing from '../assets/ui.svg'
import ServiceMovile from '../assets/serviceMovile.svg'
import ServiceDB from '../assets/serviceDatabase.svg'

import CV from '../assets/CV/CV-MatiasBua.pdf'

import './AboutMe.css'

export default function AboutMe() {

    const openPDF = () => {
        window.open(CV)
    }

    return (
        <section id='aboutme' className="container-aboutme">
            <div className="container-full-top">
                <div className="container-title-abaoutme">
                    <h1 className="tittle-aboutme">Enseñando a programar mi futuro.</h1>
                    
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
                        <Button text='Ver CV' onClick={openPDF} />
                        <SecondButton text='Enviar Email' />
                    </div>
                </div>


                <div className="container-img-aboutme">
                    <img className='myIMG' src={MyImg} alt="" />
                </div>

            </div>

            <div id='services' className='container-full-bot'>

                <div className="container-services-quality">
                    <div className="services-quality">
                        <div className="title-sevices">
                            <h3>Soluciones a medida en:</h3>
                        </div>

                        <div className="services">
                            <img className='service' src={ServiceWeb} alt="image of service of developer web" />
                            <img className='service' src={ServiceMovile} alt="image of service of developer movile" />                        
                            <img className='service' src={ServiceApi} alt="image of service of API`s" />
                            <img className='service' src={ServiceDB} alt="image of service of data base" />
                            <img className='service' src={ServiceDessing} alt="image of service of dessing ui/ux" />
                            <img className='service' src={ServiceSupport} alt="image of service of maintenance and support" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}