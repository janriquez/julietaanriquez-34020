/**Ciclos /bucles */
/**  */

let respuesta= parseInt (prompt ("ingrese la cantidad de integrantes del grupo"));

for(let i=0; i<=respuesta; i++)
    console.log("Hola " + respuesta + " veces");

    // Ingreso de miembros al club de literatura //

alert("Contenido restringido solo para miembros");
alert("A continuacion te preguntaremos unos datos para ver si puedes ingresar");
let nombre = prompt("¿Cual es tu nombre?");
let edad = prompt("¿Cual es tu edad?");

const nombre_2 ="Julian";

console.log(nombre);
console.log(edad);
console.log(nombre_2);

if (nombre_2 === nombre && edad >=18){
    alert("Bienvenido al club");
}

else{
    alert("no sos bienvenido");
}