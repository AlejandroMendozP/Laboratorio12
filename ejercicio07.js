const promedio = function(nota1, nota2, nota3){
    let promedio = (nota1+nota2+nota3)/3;
    return promedio;
}

let nota1 = parseFloat(prompt("Ingrese la 1ra nota"));
let nota2 = parseFloat(prompt("Ingrese la 2da nota"));
let nota3 = parseFloat(prompt("Ingrese la 3ra nota"));

console.log("El promedio es "+promedio(nota1,nota2,nota3));