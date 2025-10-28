function operacionesMatematicas(num1, num2) {
    let numero1 = num1;
    let numero2 = num2;

    const sumar = () => numero1 + numero2;
    const restar = () => numero1 - numero2;
    const multiplicar = () => numero1 * numero2;
    const dividir = () => numero1 / numero2;

    return {
        sumar, restar, multiplicar, dividir
    };
}

let numero1 = parseFloat(prompt("Ingrese el 1er número:"));
let numero2 = parseFloat(prompt("Ingrese el 2do número:"));

const operaciones = operacionesMatematicas(numero1, numero2);

console.log("Suma: " + operaciones.sumar());
console.log("Resta: " + operaciones.restar());
console.log("Multiplicación: " + operaciones.multiplicar());
console.log("División: " + operaciones.dividir());
