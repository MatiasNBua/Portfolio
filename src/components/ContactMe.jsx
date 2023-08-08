import React, { useRef } from 'react'
import ChangeWord from './ChangeWord'
import emailjs from '@emailjs/browser';

import './ContactMe.css'

export default function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2sugo2k', 'template_5xwim1p', form.current, 'EXk2MfHy2c0xW9iu0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactme' className="container-contactme">

            <div className="contactme">
                <h1>Brindemos mas valor a su:</h1>
                <ChangeWord words={['Empresa', 'Web', 'Proyecto', 'Producto']} />
            </div>
            <div className='form-container'>
                <form className='form-contactme' ref={form}>
                    <div className='name-email-container'>
                        <div className='name-container'>
                            {/* <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" placeholder='' required /> */}
                            <label>Name</label>
                            <input type="text" name="user_name" required />
                        </div>

                        <div className='email-container'>
                            {/* <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder='' required /> */}
                            <label>Email</label>
                            <input type="email" name="user_email" required />
                        </div>
                    </div>

                    <div className='message-container'>
                        {/* <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="4" placeholder='' required></textarea> */}
                        <label>Message</label>
                        <textarea name="message" required />
                    </div>

                    <div className="send-message-container">
                        <button className="button-send-message" onClick={sendEmail} > Enviar mensaje.</button>
                    </div>
                </form>

                {/* <form ref={form} className='form-contactme' onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form> */}

            </div>
        </section>
    )
}