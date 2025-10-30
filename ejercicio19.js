function mostrarDatos(nombre, edad, ...hobbies){
    console.log("Nombre: "+nombre+"\nEdad: "+edad);
    console.log("Hobbies:")
    for (let hobb of hobbies){
        console.log(hobb);
    }
}

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

mostrarDatos(nombre, edad, "videojuegos", "leer", "cocinar");