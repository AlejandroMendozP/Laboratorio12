const componerTransformaciones = (funcion1, funcion2) => (texto) => funcion2(funcion1(texto));
const mayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => texto + "!";

const transformar = componerTransformaciones(mayusculas, agregarSigno);

let texto = prompt("Ingrese un texto");
console.log(transformar(texto));