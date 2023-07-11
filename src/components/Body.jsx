import AboutMe from './AboutMe'
import Proyects from './Proyects'
import ContactMe from './ContactMe'


import './Body.css'

export default function Body() {

    return (
        <div className="full-container-body">
            <div className="container-body">

                <AboutMe/>
                <Proyects />
                <ContactMe/>

            </div>
        </div>
    )
}