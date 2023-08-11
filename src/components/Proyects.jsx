import TecnhoProyect from './TecnhologieProyect'
import PortadaProyect from '../assets/port-project.svg'
import PostIts from '../assets/POSTITS.svg'
import ArtBidder from '../assets/ArtBidder.svg'
import './Proyect.css'

export default function Proyects() {

    return (

        <section id='proyects' className="container-proyects">
            <div className="title-proyect">
                <h2> Proyectos realizados: </h2>
            </div>
            <div className="proyects">
                <div className="proyect">
                    <div className="text-proyect">
                        <h4>Front-End</h4>
                        <h5>Web Películas</h5>
                        <p className='description-proyect'>
                            <b>Aplicación web informativa que dispone de favoritos:</b>
                            &nbsp;Web de cine con una completa cartelera, donde los usuarios pueden acceder
                            a la información detallada de diversas películas y, además, tienen la posibilidad de guardar como favoritas aquellas que
                            les resulten de mayor interés.
                        </p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML5' />
                            <TecnhoProyect text='CSS3' />
                            <TecnhoProyect text='JavaScript' />
                            <TecnhoProyect text='React' />
                            <TecnhoProyect text='API' />
                        </div>
                    </div>
                    <div className="img-proyect">
                        <img className='img' src={PortadaProyect} alt="" />
                    </div>
                </div>

                <div className="proyect">
                    <div className="text-proyect">
                        <h4>Full-Stack</h4>
                        <h5>Sell Your Art</h5>
                        <p className='description-proyect'>
                            <b>Aplicación web con funcionalidades CRUD:</b>
                            &nbsp;Aplicación web de subastas de artesanías. Los usuarios pueden cargar productos con imágenes, precio, descripción,
                            etc. Estos productos tienen una fecha de finalización, y al concluir, se notificará al ganador por email.
                        </p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML5' />
                            <TecnhoProyect text='CSS3' />
                            <TecnhoProyect text='JavaScript' />
                            <TecnhoProyect text='MongoDB' />
                            <TecnhoProyect text='React' />
                            <TecnhoProyect text='Node.js' />
                            <TecnhoProyect text='Express' />
                        </div>
                    </div>
                    <div className="img-proyect">
                        <img className='img' src={ArtBidder} alt="" />
                    </div>
                </div>

                <div className="proyect">
                    <div className="text-proyect">
                        <h4>Full-Stack</h4>
                        <h5>Post It</h5>
                        <p className='description-proyect'>
                            <b>Aplicación web con funcionalidades CRUD:</b>
                            &nbsp;Aplicación web móvil para crear, modificar y borrar notas personales, con acceso mediante sistema
                            de usuarios y seguridad JWT. Permite cambiar contraseña y email, además de jugar con temas de diseño.
                        </p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML5' />
                            <TecnhoProyect text='CSS3' />
                            <TecnhoProyect text='JavaScript' />
                            <TecnhoProyect text='React' />
                            <TecnhoProyect text='Express' />
                            <TecnhoProyect text='Node.js' />
                            <TecnhoProyect text='MongoDB' />
                        </div>
                    </div>
                    <div className="img-proyect">
                        <img className='img' src={PostIts} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}