// Destinos económicos de ejemplo y el color con el que se pinta cada uno en el mapa.
// (Puedes reemplazarlos por los de tu modelo real, por ejemplo LADM-COL.)
export const DESTINOS = {
  Habitacional: "#f0b98d",
  Comercial: "#e07a68",
  Industrial: "#8fa5b5",
  Institucional: "#b39ddb",
  Agropecuario: "#9cc59a",
  Lote: "#dcd6c4",
};

export const formatoPesos = (valor) =>
  valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
