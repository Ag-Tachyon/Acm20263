import { DESTINOS, formatoPesos } from "../destinos";

// HIJO: muestra la información del predio seleccionado.
// El botón "Editar" solo avisa; el padre decide cambiar a modo edición.
export default function FichaPredio({ predio, onEditar }) {
  if (!predio) {
    return (
      <p className="vacio">
        Haz clic en un predio del mapa o búscalo por número predial para ver su ficha.
      </p>
    );
  }

  return (
    <article className="ficha">
      <header className="ficha__cabecera">
        <span
          className="ficha__color"
          style={{ background: DESTINOS[predio.destino] }}
          aria-hidden="true"
        />
        <div>
          <h2>{predio.codigo}</h2>
          <p>{predio.destino}</p>
        </div>
      </header>

      <dl>
        <dt>Matrícula inmobiliaria</dt>
        <dd>{predio.matricula}</dd>
        <dt>Propietario</dt>
        <dd>{predio.propietario}</dd>
        <dt>Dirección</dt>
        <dd>{predio.direccion}</dd>
        <dt>Área de terreno</dt>
        <dd>{predio.areaTerreno.toLocaleString("es-CO")} m²</dd>
        <dt>Área construida</dt>
        <dd>{predio.areaConstruida.toLocaleString("es-CO")} m²</dd>
        <dt>Avalúo catastral</dt>
        <dd>{formatoPesos(predio.avaluo)}</dd>
      </dl>

      {/* CALLBACK: sin argumentos, solo "quieren editar" */}
      <button onClick={onEditar}>Editar predio</button>
    </article>
  );
}
