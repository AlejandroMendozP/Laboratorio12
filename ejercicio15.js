function crearContador(funcion, num1) {
    let numero1 = num1;
    return funcion(numero1);
}
const incrementar = (num1) => num1+1;
const resetear = (num1) => {
    let numero1 = num1;
    return numero1;
};

console.log(crearContador(incrementar, 5));
console.log(crearContador(incrementar, 5));
console.log(crearContador(resetear, 5));
