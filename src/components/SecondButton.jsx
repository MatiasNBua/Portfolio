import './SecondButton.css'

export default function SecondButton ( { text, onClick } ) {

    return(
        <button className='second-button' onClick={onClick} > {text} </button>
    )
}