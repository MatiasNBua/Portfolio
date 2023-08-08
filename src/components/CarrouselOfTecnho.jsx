import TecnhologiesBox from '../assets/TecnologiesBox.svg'
import TecnhologiesIMG from '../assets/TecnologiesBoxIMG.svg'

import './CarrouselOfTecnho.css'

export default function Carrusel() {

    return (
        <div className="container-technologies">
            <h4 className="h4">Tecnologias adquiridas:</h4>

            <div className="container-slider">
                <div id="slider">
                </div>
                <div className="box-tecnhologies-img">
                    <img className='slider-img' src={TecnhologiesBox} alt="" />
                </div>

            </div>
        </div>
    )
}