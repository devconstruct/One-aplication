//En react cuando se importa un CSS tiene que ser desde los archivos JS
import './task.css'

export function TaskCard(props){
    return(
        <div style={{background: '#202020', color:'#fff', padding: '20px'}}>
        <h1 style={{fontWeight: 'lighter'}}>Mi primer tarea</h1>
        <p className='card'>Tarea</p>
        <span>
        {
            props.val ? 'Tarea realizada' : 'Tarea Pendiente :)'// Si val es verdadero (?) es Trea realizada sino (:) es tarea pendiente
        }
        </span>

        </div>
    )
}

export function Targeta(props){
    return(
        <div>

        {/* Tambien se puede colocar un if para los estilos si es verdad es azul sino es rojo */}
        <h1>Mi segunda tarea</h1>
        <span style={props.valor ? {background: "green"} : {background: "red"}}>
            {
                props.val ? 'Tarea realizada' : 'Tarea Pendiente :)'
            }
        </span> 
        
        </div>
    )
}

export function TargetaColores(props){
    return(
        <div>

        {/* Tambien se puede colocar un if para los estilos si es verdad es azul sino es rojo */}
        <h1>Mi tercera tarea</h1>
        <span className={props.valorcolor ? 'bg-green' : 'bg-red'}>
            {
                props.valorcolor ? 'Tarea realizada' : 'Tarea Pendiente :)'
            }
        </span> 
        
        </div>
    )
}