function procesarTexto(texto) {
    function limpiarEspacios(texto) {
        return texto.trim().replace(/\s+/g, ' ');
    }
    function contarPalabras(texto) {
        return texto.split(' ').length;
    }

    const textoLimpio = limpiarEspacios(texto);
    const cantidadPalabras = contarPalabras(textoLimpio);

    return {
        textoLimpio: textoLimpio, cantidadPalabras: cantidadPalabras};
}

let texto = prompt("Ingrese su texto");
const resultado = procesarTexto(texto);
console.log(resultado);