let suma = 0
let promedio
let años 
let i
let edad

function Familia(edad){
    this.edad = edad;
    console.log(`Tu familiar tiene ${edad} años`);
}

function crearFamiliar() {
        edad = parseInt(prompt("Ingresa la edad de tus familiares"))
        return new Familia(edad)
}

function acumulador(){
    suma = suma + edad;
}
function resultado(){
    promedio = suma / cant;
}

alert("Hola!, vamos a calcular el promedio de la edad de tu familia")
let apellido = prompt("Ingresa el apellido de tu familia")

let cant = parseInt(prompt("Cuantas personas integran tu familia?"))

while(i != cant){
    for (i = 0; i < cant; i++){   
        crearFamiliar();
        acumulador();
    } 
    resultado();
        alert(`La familia ${apellido} tiene un promedio de edad de ${promedio}, y suma total de edades es de ${suma}`) 
}
