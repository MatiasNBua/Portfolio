import { useState } from 'react'
import Button from './Button'
import ChangeWord from './ChangeWord'
import SecondButton from './SecondButton'
import CV from '../assets/CV-MatiasBua.pdf'

import './ContactMe.css'

export default function ContactMe () {
    const [emailCopied, setEmailCopied] = useState('buamatiashd@gmail.com')

    const openPDF = () => {
        window.open(CV)
    }

    const copyEmail = () => {
        navigator.clipboard.writeText(emailCopied)
    }

    return(
        <section id='contactme' className="container-contactme">
                    <div className="contactme">
                        <h1>Demosle mas valor a su:</h1>
                        <ChangeWord words={['Empresa', 'Web', 'Proyecto']} />

                    </div>
                    <div className="buttons-of-contactme">
                        <SecondButton text='Copy Email' onClick={copyEmail}/>
                        <Button text='Ver CV' onClick={openPDF}/>
                    </div>
                </section>
    )
}