function descargarArchivo(url, callback){
    console.log("Descargando...");
    setTimeout(function() {
        const mensaje = "Descarga completa de "+url;
    callback(mensaje); 
}, 3000);
}

function descargaCompleta(mensaje){
    console.log(mensaje);
}

let url = prompt("Ingrese la URL para descargar");
descargarArchivo(url, descargaCompleta);
