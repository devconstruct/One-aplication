import PorpTypes from 'prop-types'

export function Button({text, name ='Usuario'}) {
    console.log(text);
    if (!text){
        console.error('el texto es requerido');
    }
    return(
        <button>
            {text} {name}
        </button>
    )
}

export function EvenButton({text, name =' hoa'}) {
    return( 
        <button onClick={function (){
            console.log('Hola mundo')
        }}>
            {text} {name}
        </button>
    )
}

Button.propTypes ={
    text: PorpTypes.string.isRequired
}