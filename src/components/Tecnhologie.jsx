import ServiceWeb from '../assets/container-service.svg'
import './Tecnhologie.css'

export default function Tecnhologie() {

    return (
        <section id='tecnhologie'>
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
        </section>
    )
}