import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Suma, Card } from "./Saludar"
import Product, { Navbar } from "./Product"
import { Button, EvenButton } from "./Button"
import { TaskCard, Targeta, TargetaColores } from "./Task";
import { Post, PostJS } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Inicio de uso de API
const user = [
  {
    id: 1,
    name: 'Antonio Rivera',
    image: 'https://robohash.org/user1'
  },
  {
    id: 2,
    name: 'Ana Victoria',
    image: 'https://robohash.org/user2'
  },
  {
    id: 3,
    name: 'Juan Segobia',
    image: 'https://robohash.org/user3'
  }
]

//Fin de uso de API

//Inicio de uso de estados

function Counter() {

  //Inicio de useEfect y se va a efectuar cada vez que exista un cambio en el componente
    useEffect(function(){
      console.log('render')
    }, [ ]//estos cochetes siginificar que una vez que se ejecute el useEfect no realizara ningun otra accion es decir que solo el useEfect se ejecutara 1 sola vez, pero si dentro de los corchetes le colocamos la constante counter, significa que cada vez que incrementemos el numero se ejecute inmediatamente, se le conoce como dependencias.
    )
  //Fin de useEfect

  const [ counter, setCounter ] = useState(0)

  const [ mensaje, setMensaje ] = useState('') //al dejar el useState vacio, refiere a que incialmente el mensaje en el input es vacio

  const [valor, setValor] = useState(0)

  //let counter = 1

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={()=>{
        //counter = counter + 1
        setCounter(counter + 1)
      }}>
        Sumar
      </button>

      <button onClick={() => {
        setCounter(counter -1)
      }}>
        Restar
      </button>

      <button onClick={() => {
        setCounter(1000)
      }}>
        Reiniciar
      </button>

      <>
        <input onChange={e => setMensaje(e.target.value) }/>
        <button onClick={() =>{
          alert('El mensajes es:' + mensaje)
        }}>
          Guardar
        </button>

        <hr/>
        <h1>Valor: {valor}</h1>
        <button onClick={function () {
          setValor(valor + 1)
        }}>
          Incrementar
        </button>

      </>




    </div>
  )
}
//Fin de usos de estados

root.render(
  <>
  {/*Inicio de llamar al elementos Counter*/}
    <Counter/>
  {/*Fin de llamar al elementos Counter*/}

    {/*Inicio de uso de arreglos */}

    {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      )
    })}

    {/*Fin de uso de arreglos */}

    <Navbar />
    <Product />
    <Suma />

    <Saludar title="Hola a todos" name="Joe" />
    <Saludar title="Hola" name="Erika" />


    <Card
      title="Hola a todos"
      name='Antonio'
      amount={1786}
      married={false}
      points={[100, 20]}
      address={{
        street: 'av some 123',
        city: 'New York'
      }}

    />

    <Card
      title="Componente bueno"
      name='Vicky'
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{
        street: 'av some 123',
        city: 'Mexico'
      }}
      greet={function () { alert('Hello') }}
    />

    <Button text='Hola' />
    <Button text='Dame click' />
    <Button text='hola' />
    <Button text='kalo' name="Joe" />

    <EvenButton name="Lalo" />

    <input onClick={function () {
      alert('input seleccionado')
    }} />

    <input onChange={function () {
      console.log('escribiendo en el input')
    }} />

    <input onChange={function (evento) { /* ver lo que esta escribiendo el usuario */
      console.log(evento.target.value)
    }} />

    <TaskCard />

    <TaskCard val={true} />

    <Targeta valor={false} />

    <TargetaColores valorcolor={true} />

    <form onSubmit={(e) => {
      e.preventDefault()
      console.log('Enviado')
    }}>
      <h1>Hola formulario</h1>
      <button>Enviar</button>
    </form>

    <Post />

    <PostJS />


  </>
);
