import AboutMe from './AboutMe'
import Proyects from './Proyects'
import ContactMe from './ContactMe'
import Tecnhologie from './Tecnhologie'


import './Body.css'

export default function Body() {

    return (
        <div className="full-container-body">
            <div className="container-body">

                <AboutMe/>
                <Tecnhologie />
                <Proyects />
                <ContactMe/>

            </div>
        </div>
    )
}