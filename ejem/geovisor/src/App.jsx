import { useState } from "react";
import prediosIniciales from "./data/predios.json"; // <- nuestra "base de datos"
import { DESTINOS } from "./destinos";
import MapaPredios from "./components/MapaPredios";
import BuscadorPredial from "./components/BuscadorPredial";
import FichaPredio from "./components/FichaPredio";
import FormularioPredio from "./components/FormularioPredio";
import "./App.css";

// PADRE: es el dueño del estado y de TODAS las decisiones.
// Los hijos solo dibujan y avisan; aquí se decide qué hacer con cada aviso.
export default function App() {
  const [predios, setPredios] = useState(prediosIniciales);
  const [seleccionadoId, setSeleccionadoId] = useState(null);
  const [editando, setEditando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  console.log(predios[0])

  // Siempre se busca la versión actual del predio a partir del id
  const predioSeleccionado =
    predios.find((p) => p.id === seleccionadoId) ?? null;

  // --- Funciones que se pasan como callbacks -------------------------

  // Las llama MapaPredios
  const seleccionarPredio = (id) => {
    setSeleccionadoId(id);
    setEditando(false);
    setMensaje("");
  };

  // La llama BuscadorPredial
  const buscarPredio = (texto) => {
    const consulta = texto.trim().toLowerCase();
    const encontrado = predios.find(
      (p) =>
        p.codigo.toLowerCase() === consulta ||
        p.matricula.toLowerCase() === consulta
    );

    if (encontrado) {
      seleccionarPredio(encontrado.id);
      setMensaje(`Predio ${encontrado.codigo} encontrado.`);
    } else {
      setMensaje(`No se encontró ningún predio con "${texto}".`);
    }
  };

  // La llama FormularioPredio
  const guardarPredio = (datos) => {
    // "Actualizar" en nuestra BD: reemplazamos el predio con ese id
    setPredios((actuales) =>
      actuales.map((p) => (p.id === datos.id ? { ...p, ...datos } : p))
    );
    setEditando(false);
    setMensaje("Cambios guardados. Recuerda exportar el JSON para conservarlos.");
  };

  // Un navegador NO puede escribir directamente sobre predios.json.
  // Lo que sí puede es generar un archivo nuevo y descargarlo.
  const exportarJSON = () => {
    const contenido = JSON.stringify(predios, null, 2);
    const blob = new Blob([contenido], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "predios.json";
    enlace.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app">


      <header className="app__encabezado">
        <h1>Geovisor predial</h1>
        
        <button className="secundario" onClick={exportarJSON}>
          Exportar predios.json
        </button>
      </header>


      <main className="app__cuerpo">
        <section className="app__mapa">
          <MapaPredios
            predios={predios}
            seleccionadoId={seleccionadoId}
            onSelectPredio={seleccionarPredio}
          />
          <ul className="leyenda">
            {Object.entries(DESTINOS).map(([nombre, color]) => (
              <li key={nombre}>
                <span style={{ background: color }} aria-hidden="true" />
                {nombre}
              </li>
            ))}
          </ul>
        </section>


        <aside className="app__panel">
          <BuscadorPredial onBuscar={buscarPredio} />

          {mensaje && <p className="mensaje" role="status">{mensaje}</p>}

          {editando && predioSeleccionado ? (
            <FormularioPredio
              key={predioSeleccionado.id}
              predio={predioSeleccionado}
              onGuardar={guardarPredio}
              onCancelar={() => setEditando(false)}
            />
          ) : (
            <FichaPredio
              predio={predioSeleccionado}
              onEditar={() => setEditando(true)}
            />
          )}
        </aside>

      </main>


    </div>
  );
}
