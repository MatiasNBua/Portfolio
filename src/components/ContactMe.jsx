import React, { useRef } from 'react'
import ChangeWord from './ChangeWord'
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';


import './ContactMe.css'

export default function ContactMe() {
    const form = useRef();

    const showTooltip = (e) => {
        const tooltip = e.target.querySelector('.tooltip-label');
        if (tooltip) {
            tooltip.classList.add('tooltip-visible');
        }
    };

    // Función para ocultar tooltips
    const hideTooltip = (e) => {
        const tooltip = e.target.querySelector('.tooltip-label');
        if (tooltip) {
            tooltip.classList.remove('tooltip-visible');
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const fields = form.current.elements;
        let isEmptyFrom = false;
        let emptyInput = []

        for (let i = 0; i < fields.length; i++) {
            if (fields[i].required && fields[i].value.trim() === '') {
                emptyInput = fields[i].name
                isEmptyFrom = true;
                break;
            }
        }

        if(isEmptyFrom){
            toast.error(`Por favor, complete el campo ${emptyInput}.`,{
                style: {
                    border: '1px solid #FF281E',
                    background: '#1C1C1F',
                    color: '#FF281E',

                  }
            })
        }else {
            emailjs.sendForm('service_2sugo2k', 'template_5xwim1p', form.current, 'EXk2MfHy2c0xW9iu0')
                .then((result) => {
                    console.log(result.text);
                    toast.success('Mensaje Enviado exitosamente.',{
                        style: {
                            border: '1px solid #7fffd4',
                            background: '#1C1C1F',
                            color: '#7fffd4'
                          },
                    })
                }, (error) => {
                    toast.error('Su mensaje no se envio.')
                    console.log(error.text);
                });
            
        }

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
                            <label className='tooltip-label' data-tooltip='Campo requerido'>Nombre</label>
                            <input type="text" name="Nombre" placeholder='Nombre' required />
                        </div>

                        <div className='email-container'>
                            <label className='tooltip-label' data-tooltip='Campo requerido'>Email</label>
                            <input type="email" name="Email" placeholder='Email' required />
                        </div>
                    </div>

                    <div className='message-container'>
                        <label className='tooltip-label' data-tooltip='Campo requerido'>Mensaje</label>
                        <textarea name="Mensaje" placeholder='Deje su mensaje aqui...' required />
                    </div>

                    <div className="send-message-container">
                        <button className="button-send-message" onClick={sendEmail} > Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </section>
    )
}