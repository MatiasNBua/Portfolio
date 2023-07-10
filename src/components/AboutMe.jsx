import ChangeWord from './ChangeWord'
import Button from './Button'
import MyImg from '../assets/img-mt-desktop.svg'

import './AboutMe.css'

export default function AboutMe (){


    return(
            <section id='aboutme' className="container-aboutme">
                    <div className="container-title-abaoutme">
                        <h1>Mi nombre es Matias, soy</h1>
                        <ChangeWord words={['dd', 'aa', 'ss']} />
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
                            <Button text='Contacto' /*onClick={handleNavigateContact}*/ />
                            <Button text='Download CV' /*onClick={handleDownloadCV}*/ />
                        </div>
                    </div>

                    <div className="container-img-aboutme">
                        <img src={MyImg} alt="" />
                    </div>
                </section>
        
    )
}