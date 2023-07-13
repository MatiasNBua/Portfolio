import './Button.css'

export default function Button ( { text, onClick, href } ) {

    return(
        <button className='button' onClick={onClick}>
            {text}
        </button>
    )
}