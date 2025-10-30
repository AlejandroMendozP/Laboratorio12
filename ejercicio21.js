let numeros = [1, 2, 3, 4, 5, 6];
function filtrarArreglo(arr, callback) {
    let resultado = [];
    for (let elemento of arr) {
        if (callback(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}

let pares = filtrarArreglo(numeros, function(n) {
    return n % 2 === 0; });

console.log("Números pares:", pares);