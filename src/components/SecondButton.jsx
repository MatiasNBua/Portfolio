import './SecondButton.css'

export default function SecondButton ( { text, onClick } ) {

    const recipientEmail = 'buamatiashd@gmail.com'
    const subject = "Contactame"
    const sendEmail = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`

    return(
        <a className="second-button" 
        href={sendEmail}
        onClick={onClick}
        > {text}
        {/* <button className='send-email' onClick={onClick} > {text} </button> */}
        </a>
    )
}