export function Saludar(props) {
  //return <h1>Hola mundo mi primer componente</h1>
  return (
    <h1>
      {props.title} tu nombre es {props.name}
    </h1>
  );
}

export function Suma() {
  function add(x, y) {
    return x + y;
  }
  return (<h1>{add(10, 20)}</h1>)
}

export function Card(props) {
  // si quieres ser mas directo y estrucuturarlo puedes usar directamente las propiedades ejemplo export function UserCard(name, amount, married, etc,etc)
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.amount}</p>
      <p>{props.married ? "married" : "single"}</p>
      <ul>
        <li>City: {props.address.city}</li>
        <li>Address: {props.address.street}</li>
      </ul>
    </>
  )
}
