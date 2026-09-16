import './App.css'

function App() {

  let nombreUsuario = prompt("¿Cuál es tu nombre?")

  return (
    <>
      <div className="container"> 
        <h1 className="title">HOLA MUNDO</h1>
        <p className="texto">
          hola {`${nombreUsuario}`}, cómo estás?
        </p>
      </div>
    </>
  )
}

export default App
