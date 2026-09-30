import { DESTINOS } from "../destinos";

// HIJO "tonto": solo dibuja los predios y avisa cuando le hacen clic.
// No sabe qué es una ficha, ni un formulario, ni de dónde vienen los datos.
//
//   props de DATOS   -> predios, seleccionadoId   (bajan del padre)
//   props CALLBACK   -> onSelectPredio            (suben al padre)
export default function MapaPredios({ predios, seleccionadoId, onSelectPredio }) {
  return (
    <svg
      className="mapa"
      viewBox="0 0 100 66"
      role="group"
      aria-label="Mapa de predios"
    >
      {/* Cuadrícula de fondo, como un plano */}
      <defs>
        <pattern id="grilla" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#d7dedb" strokeWidth="0.15" />
        </pattern>
      </defs>
      <rect width="100" height="66" fill="url(#grilla)" />

      {predios.map((predio) => {
        const puntos = predio.geometria.map(([x, y]) => `${x},${y}`).join(" ");
        const activo = predio.id === seleccionadoId;

        return (
          <polygon
            key={predio.id}
            points={puntos}
            className={activo ? "predio predio--activo" : "predio"}
            fill={DESTINOS[predio.destino] ?? "#ccc"}
            tabIndex={0}
            role="button"
            aria-label={`Predio ${predio.codigo}`}
            aria-pressed={activo}
            // CALLBACK: el mapa avisa QUÉ predio se tocó (solo el id).
            // Pasamos el id y no el objeto completo para no duplicar datos:
            // el padre siempre busca la versión más reciente del predio.
            onClick={() => onSelectPredio(predio.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectPredio(predio.id);
              }
            }}
          >
            <title>{`${predio.codigo} - ${predio.destino}`}</title>
          </polygon>
        );
      })}
    </svg>
  );
}
