const fs = require("fs");

const registrar = (nombreDelArchivo, nuevoContenido) => {
  const contenidoExistente = JSON.parse(
    fs.readFileSync(nombreDelArchivo, "utf8")
  );
  contenidoExistente.push(nuevoContenido);
  fs.writeFileSync(nombreDelArchivo, JSON.stringify(contenidoExistente));
};

const leer = (nombreDelArchivo) => {
  const contenido = fs.readFileSync(nombreDelArchivo, "utf8");
  console.log(JSON.parse(contenido));
};

const borrarListado = (nombreDelArchivo) => {
  fs.writeFileSync(nombreDelArchivo, "[]");
};

module.exports = { registrar, leer, borrarListado };
