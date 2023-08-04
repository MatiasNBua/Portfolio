import TecnhologiesBox from '../assets/TecnologiesBox.svg'
import './CarrouselOfTecnho.css'

export default function Carrusel (){

    return(
        <div className="container-technologies">
                <h4 className="h4">Tecnologias adquiridas:</h4>

                <div className="container-slider">
                    <div id="slider">
                        <img src={TecnhologiesBox} alt="" />
                    </div>

                </div>
            </div>
    )
}