import { useState } from "react";

// HIJO: recoge el texto y avisa "buscaron esto".
// No sabe dónde están los datos ni qué pasa con el resultado.
export default function BuscadorPredial({ onBuscar }) {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    onBuscar(texto); // CALLBACK
  };

  return (
    <form className="buscador" onSubmit={manejarEnvio}>
      <label htmlFor="busqueda">Número predial o matrícula</label>
      <div className="buscador__fila">
        <input
          id="busqueda"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="25175-00-01-0003-0001"
        />
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
}
