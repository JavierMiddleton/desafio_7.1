const { registrar, leer, borrarListado } = require("./operaciones");

const argumentos = process.argv.slice(2);

const operacion = argumentos[0];
const nombre = argumentos[1];
const edad = argumentos[2];
const tipo = argumentos[3];
const color = argumentos[4];
const enfermedad = argumentos[5];

if (operacion === "registrar") {
  const contenido = {
    "Nombre del animal": nombre,
    "Edad del animal": edad,
    "Tipo de animal": tipo,
    "Color del animal": color,
    "Enfermedad del animal": enfermedad,
  };
  registrar("citas.json", contenido);
} else if (operacion === "leer") {
  leer("citas.json");
} else if (operacion === "borrar") {
  borrarListado("citas.json");
} else {
  console.log("Ingresa una operación válida.");
}
