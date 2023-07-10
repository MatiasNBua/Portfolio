import TecnhoProyect from './TecnhologieProyect'
import PortadaProyect from '../assets/port-project.svg'

import './Proyect.css'

export default function Proyects() {

    return (

        <section id='proyects' className="container-proyects">
            <div className="tite-proyect">
                <h2> Proyectos realizados: </h2>
            </div>
            <div className="proyects">
                <div className="proyect">
                    <div className="text-proyect">
                        <h4>Sell Your Art</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, fugiat eligendi voluptas natus ipsum magni eos ullam eaque, amet, nulla molestiae! Soluta voluptates ducimus dolore autem velit doloribus, sapiente sequi.</p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML' />
                            <TecnhoProyect text='CSS' />
                            <TecnhoProyect text='JS' />
                            <TecnhoProyect text='REACT' />
                        </div>
                    </div>
                    <div className="img-proyect">
                        <img src={PortadaProyect} alt="" />
                    </div>
                </div>
                <div className="proyect">
                    <div className="text-proyect">
                        <h4>JUNMAT</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, fugiat eligendi voluptas natus ipsum magni eos ullam eaque, amet, nulla molestiae! Soluta voluptates ducimus dolore autem velit doloribus, sapiente sequi.</p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML' />
                            <TecnhoProyect text='CSS' />
                            <TecnhoProyect text='JS' />
                            <TecnhoProyect text='REACT' />
                        </div>
                    </div>
                    <div className="img-proyect">
                        <img src={PortadaProyect} alt="" />
                    </div>
                </div>
                <div className="proyect">
                    <div className="text-proyect">
                        <h4>Post It</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, fugiat eligendi voluptas natus ipsum magni eos ullam eaque, amet, nulla molestiae! Soluta voluptates ducimus dolore autem velit doloribus, sapiente sequi.</p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML' />
                            <TecnhoProyect text='CSS' />
                            <TecnhoProyect text='JS' />
                            <TecnhoProyect text='REACT' />
                        </div>
                    </div>
                    <div className="img-proyect">
                        <img src={PortadaProyect} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}