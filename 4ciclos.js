// 1. que es un ciclo?
// forma de ejecutar un bloque de codigo hasta que se cumpla una condicion

// 2. tipo de ciclos?
// while(si pregunta la 1era vez), 
// for(nos pide inicializar una var, validacion y que hacer con la var creada), 
// do while(no pregunta la primera vez)

// 3. ciclo infinito?
// cuando nuestra condicion/validacion nunca se cumple y bloquea la aplicacion.

// 4. se pueden mezclar ciclos y condicionales?
// si, aunque los ciclos ya contienen condicionales nada nos impide agregar mas condicionales dentro del ciclo.

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

// let i = 0;
// while ( i < 5){
//     console.log("El valor de i es: " + i);
//     i++;
// }

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
// let i = 10;
// while(i >= 2){
//     console.log("El valor de i es: " + i);
//     i--;
// }

// codigo que le pida al usuario cuanto es 2+2.
let respuesta;
while(respuesta != '4'){
    let pregunta = prompt('cuanto es 2+2?');
    respuesta = pregunta;
}

