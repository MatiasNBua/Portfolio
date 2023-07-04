import Header from './Header'
import Footer from './Footer'

import './Body.css'

export default function Body (){

    return(
        <div className="container-body">

            <div className="header">
            <Header/>
            </div>

            <div className="footer">
            <Footer/>
            </div>
            
        </div>
    )
}