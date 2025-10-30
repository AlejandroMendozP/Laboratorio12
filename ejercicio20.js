function ejecutarOperacion(fn, num1, num2){
    return fn(num1, num2);
}

function modulo(num1, num2){
    return num1%num2;
}

let num1 = parseFloat(prompt("Ingrese el 1er numero"));
let num2 = parseFloat(prompt("Ingrese el 2do numero"));
console.log("El modulo de "+num1+" y "+num2+" es "+ejecutarOperacion(modulo, num1, num2))