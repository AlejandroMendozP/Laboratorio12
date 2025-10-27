const esPositivo = (num) => {
    if (num > 0){
        return true;
    }
    else return false;
}

let num = parseFloat(prompt("Ingrese un numero"));
if (esPositivo(num)){
    console.log("El numero es positivo");
}
else  console.log("El numero no es positivo");