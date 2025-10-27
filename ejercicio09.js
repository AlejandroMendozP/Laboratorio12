const calcularDescuento = function(precio, porcentaje){
    descuento = precio*(porcentaje/100);
    return descuento;
}

let precio = parseFloat(prompt("Ingrese el precio"));
let porcentaje = parseFloat(prompt("Ingrese el descuento"));

console.log("El precio del descuento es "+calcularDescuento(precio, porcentaje));