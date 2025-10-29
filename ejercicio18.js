function media(...numeros){
    let suma = 0, promedio = 0;
    for (let p of numeros){
        suma+=p;
    }
    promedio = suma/numeros.length;
    return promedio;
}

console.log("El promedio total es "+media(1, 7, 13));