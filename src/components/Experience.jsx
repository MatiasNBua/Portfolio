import TecnhoProyect from './TecnhologieProyect'
import PortadaProyect from '../assets/port-project.svg'
import JUNMAT from '../assets/JUNMAT.svg'
import JUNMAT1 from '../assets/image 8.svg'


import './Experience.css'

export default function Experience() {

    return (

        <section id='experience' className="container-experiences">
            <div className="title-experience">
                <h2> Experiencia Laboral: </h2>
            </div>
            <div className="experiences">
                <div className="experience">
                    <div className="text-experience">
                        <h4>Full-Stack</h4>
                        <h5>L + R</h5>
                        <p className='description-experience'>
                        <b> Trackeo & Finanzas de proyectos: </b>
                        &nbsp;Cree una aplicación web que se conecta con mi API REST para mostrar de forma sencilla
                        y detallada los estados de cada proyecto. Con el fin de lograr enviar los datos actualizados
                        hacia Google Sheets
                        </p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML5' />
                            <TecnhoProyect text='CSS3' />
                            <TecnhoProyect text='JavaScript' />
                            <TecnhoProyect text='React' />
                            <TecnhoProyect text='Express' />
                            <TecnhoProyect text='Moment.js' />
                        </div>
                    </div>
                    <div className="img-experience">
                        <img className='img' src={PortadaProyect} alt="" />
                    </div>
                </div>
                <div className="experience">
                    <div className="text-experience">
                        <h4>Front-end</h4>
                        <h5>JUNMAT</h5>
                        <p className='description-experience'>
                        <b>Maquetador:</b>
                        &nbsp;Cree sobre una plantilla secciones funcionales como calendario, carrusel de fotos, preguntas frecuentes
                        y barra lateral de redes. Simpre priorizando la accesibilidad, la velocidad de la web y el sistema
                        responsive. Mi enfoque fue lograr una integración perfecta con el diseño original y una apariencia profesional.
                        </p>
                        <div className="tecnhologies">
                            <TecnhoProyect text='HTML5' />
                            <TecnhoProyect text='CSS3' />
                            <TecnhoProyect text='JavaScript' />
                            <TecnhoProyect text='React' />
                            <TecnhoProyect text='Bootstrap' />
                            <TecnhoProyect text='JQuery' />
                        </div>
                    </div>
                    <div className="img-experience">
                        <img className='img' src={JUNMAT1} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}