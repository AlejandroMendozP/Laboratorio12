function areaRectangulo(base, altura){
    return base*altura;
}

let base = parseFloat(prompt("Ingrese la base"));
let altura = parseFloat(prompt("Ingrese la altura"));

console.log("El area es "+areaRectangulo(base, altura));