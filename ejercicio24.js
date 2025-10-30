function crearSecuencia(inicio, paso) {
    let actual = inicio;

    return function() {
        const valor = actual;
        actual += paso;
        return valor;
    };
}

const siguiente = crearSecuencia(2, 2);

console.log(siguiente());
console.log(siguiente());
console.log(siguiente());
console.log(siguiente());