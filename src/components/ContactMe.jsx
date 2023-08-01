import { useState } from 'react'
import ChangeWord from './ChangeWord'
import SecondButton from './SecondButton'

import './ContactMe.css'

export default function ContactMe() {
    const [emailCopied, setEmailCopied] = useState('buamatiashd@gmail.com')



    const copyEmail = () => {
        navigator.clipboard.writeText(emailCopied)
    }

    return (
        <section id='contactme' className="container-contactme">

            <div className="container-technologies">
                <h4 className="h4">Tecnologias adquiridas:</h4>

                <div className="container-slider">
                    <div id="slider"></div>
                </div>
            </div>

            <div className="contactme">
                <h1>Brindemos mas valor a su:</h1>
                <ChangeWord words={['Empresa', 'Web', 'Proyecto', 'Producto']} />
            </div>
            <div>
                <form className='buttons-of-contactme' action="/enviar_correo" method="post">
                    .
                    <div className='name-container'>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>

                    <div className='email-container'>
                        <label for="correo">Correo electrónico:</label>
                        <input type="email" id="correo" name="correo" required />
                    </div>

                    <div className='message-container'>
                        <label for="message">mensaje:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>

                    <button type="submit">Enviar correo</button>
                </form>

            </div>
        </section>
    )
}