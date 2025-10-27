const saludo = (nombre) => {
    return "Hola "+ nombre;
}

let nombre = prompt("Ingrese su nombre:");
console.log(saludo(nombre));