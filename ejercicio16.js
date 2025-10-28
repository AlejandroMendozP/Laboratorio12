function acumulador(valorInicial){
    let total = valorInicial;

    return function(nuevoValor) {
        total += nuevoValor;
        return total;
    };
}

let numero = parseFloat(prompt("Ingrese el valor inicial"));
const miAcumulador = acumulador(numero);
console.log(miAcumulador(5));
console.log(miAcumulador(3));