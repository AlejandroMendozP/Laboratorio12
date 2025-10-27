function mayorDeTres(num1, num2, num3){
    if (num1 > num2 && num1 > num3)
        return num1;
    else if (num2 > num1 && num2 > num3)
        return num2;
    else 
        return num3;
}

let num1 = parseFloat(prompt("Ingrese el primer numero"));
let num2 = parseFloat(prompt("Ingrese el segundo numero"));
let num3 = parseFloat(prompt("Ingrese el tercer numero"));

console.log("El numero mayor es "+mayorDeTres(num1, num2, num3));