import { useState } from "react";
import { DESTINOS } from "../destinos";

// HIJO: edita una COPIA de los datos. Solo cuando el usuario pulsa
// "Guardar" avisa al padre con los datos nuevos. El formulario no sabe
// si se guardan en un JSON, en una API o en una base de datos.
export default function FormularioPredio({ predio, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState(predio);

  const cambiar = (campo) => (e) =>
    setDatos({ ...datos, [campo]: e.target.value });

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Convertimos los números (los inputs siempre entregan texto)
    onGuardar({
      ...datos,
      areaTerreno: Number(datos.areaTerreno),
      areaConstruida: Number(datos.areaConstruida),
      avaluo: Number(datos.avaluo),
    }); // CALLBACK con los datos nuevos
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Editar {predio.codigo}</h2>

      <label>
        Propietario
        <input value={datos.propietario} onChange={cambiar("propietario")} required />
      </label>

      <label>
        Dirección
        <input value={datos.direccion} onChange={cambiar("direccion")} required />
      </label>

      <label>
        Destino económico
        <select value={datos.destino} onChange={cambiar("destino")}>
          {Object.keys(DESTINOS).map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </label>

      <div className="formulario__par">
        <label>
          Área terreno (m²)
          <input type="number" min="1" value={datos.areaTerreno} onChange={cambiar("areaTerreno")} required />
        </label>
        <label>
          Área construida (m²)
          <input type="number" min="0" value={datos.areaConstruida} onChange={cambiar("areaConstruida")} required />
        </label>
      </div>

      <label>
        Avalúo catastral (COP)
        <input type="number" min="0" value={datos.avaluo} onChange={cambiar("avaluo")} required />
      </label>

      <div className="formulario__acciones">
        <button type="submit">Guardar cambios</button>
        {/* CALLBACK: "cancelaron", el padre decide volver a la ficha */}
        <button type="button" className="secundario" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
