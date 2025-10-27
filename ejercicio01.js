function esPar(num){
    if (num%2 == 0){
        return true;
    }
    else return false;
}

let num = parseInt(prompt("Ingrese un numero"));
if (esPar(num)){
    console.log("El numero es par");
}
else console.log("EL numero es impar")