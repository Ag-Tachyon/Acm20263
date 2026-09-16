import "./App.css"
// import { Btn } from "./components/Btn.jsx"
import { BtnDesec } from "./components/BtnDesec.jsx"

function App() {

  let textoBtnUno = "Btn_de_enviar"
  let textoBtnUnoMensaje = "Enviar"
  let textoBtnDos = "Btn_de_borrar"
  let textoBtnDosMensaje = "Borrar"


  return (
    <>

      {/* Usando props con la naotación de Clases */}
      {/* <Btn text={textoBtnUnoMensaje} name={textoBtnUno}></Btn>
      <Btn text={textoBtnDosMensaje} name={textoBtnDos}></Btn>
      <Btn text={textoBtnDosMensaje} name={"Btn-morado"}></Btn> */}

      {/* Usando props con desestrucuración */}
      <BtnDesec text={textoBtnDosMensaje} name="desec"></BtnDesec>


    </>
  )
}

export default App
