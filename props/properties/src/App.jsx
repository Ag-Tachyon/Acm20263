import { Fruteria } from "./components/padre"
import { UserCard } from "./components/UserCard";
import { Btn } from "./components/btn";

function App() {

  const userData = {
    id: 101,
    nombre: "Geltindonna",
    cargo: "Runner",
    empresa: "Cygames" 
  };

  const deleteUser = (id)=>{
    alert(`Eliminando usuario con Id: ${id}`)
  }
  
  return (
    <>
      {/* ejemplo del patrón "Callback" */}
      {/* <Fruteria></Fruteria> */}

      {/* Ejemplo del patrón Spread */}
      <div style={{padding:'20px'}}>
          <h1>Panel de Información</h1>
          <UserCard {...userData} onClick={deleteUser}></UserCard>
      </div>

      <Btn>
        <p>lore</p>
      </Btn>
    </>
  )
}

export default App
