function esMultiplo(num1, num2){
    if (num1%num2 == 0){
        return true;
    }
    else return false;
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

if (esMultiplo(num1, num2)){
    console.log("El numero "+num1+" es multiplo de "+num2);
}
else console.log("El numero "+num1+" no es multiplo de "+num2);