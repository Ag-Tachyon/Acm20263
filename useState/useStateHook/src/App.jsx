import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <>
      
        
      <div>
        <input type={showPassword ? 'text' : 'password'} placeholder='Ingresa tu constraseña' />
        <button onClick={toggleVisibility}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
      </div>




        {/* 
        
          ¿Dónde vemos el Hook de UseState en nuestro día a día?
          
          * Carrito de comprar
          * Filtros de Búsqueda
          * Botón de "Me gusta"
          * Campos de comentarios -> Guardar el texto del usuario antes de publicarlo
          * Menú desplegable 
          * Pestañas activas -> Tienen cierto estilo cuando están activas
        

        */}

     
    </>
  )
}

export default App
