import Button from './Button'
import ChangeWord from './ChangeWord'
import './ContactMe.css'

export default function ContactMe () {

    return(
        <section id='contactme' className="container-contactme">
                    <div className="contactme">
                        <h1>Demosle mas valor a su:</h1>
                        <ChangeWord words={['Empresa', 'Web', 'Proyecto']} />

                    </div>
                    <div className="buttons-of-contactme">
                        <Button text='Copy Email' />
                        <Button text='Donwload CV' />
                    </div>
                </section>
    )
}