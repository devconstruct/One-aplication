import { VscBug } from 'react-icons/vsc';

export function Post() {
    return (
        <>
        
    <li>Titulo de la publicacion</li>
    <li>Titilo de la aplicacion 2</li>
    </>
    )
}

export function PostJS() {
    return (
        <button onClick={()=>{
            //alert('Obteniendo datos')
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => console.log(data)) //colocar un catch en caso de que exista la urlJSON incorrecta
                .catch(error => console.error(error))
        }}>
            <VscBug/>
            Traer Datos
        </button>
    )
}