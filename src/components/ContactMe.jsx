import { useState } from 'react'
import ChangeWord from './ChangeWord'

import './ContactMe.css'

export default function ContactMe() {
    const sendMessage = () => {
        console.log(a)
    }

    const copyEmail = () => {
        navigator.clipboard.writeText(emailCopied)
    }

    return (
        <section id='contactme' className="container-contactme">

            <div className="contactme">
                <h1>Brindemos mas valor a su:</h1>
                <ChangeWord words={['Empresa', 'Web', 'Proyecto', 'Producto']} />
            </div>
            <div className='form-container'>
                <form className='form-contactme' action="/enviar_correo" method="post">
                    <div className='name-email-container'>
                    <div className='name-container'>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" placeholder='' required />
                    </div>

                    <div className='email-container'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder='' required />
                    </div>
                    </div>

                    <div className='message-container'>
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="4" placeholder='' required></textarea>
                    </div>

                    <div className="send-message-container">
                    <button className="button-send-message" onClick={sendMessage} > Enviar mensaje.</button>
                    </div>
                </form>

            </div>
        </section>
    )
}