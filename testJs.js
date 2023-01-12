let nombre= 'Monica';
let apellido = 'Munoz';
let nombreUsuarioPlatzi;
let edad;
let correoElectrónico;
let mayorDeEdad;
let dineroAhorrado= 500;
let deudas=200;

function nombreCompleto (a, b){
    return a + b;
}
console.log(nombreCompleto(nombre, apellido))

function dineroReal (a, b){
    return a - b;
}
console.log(dineroReal(dineroAhorrado, deudas))

// const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion = "Basic";
function suscription (tipoDeSuscripcion){
    if(tipoDeSuscripcion ===  "Free"){
        console.log("Solo puedes tomar los cursos gratis")
    }
    else if(tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if(tipoDeSuscripcion === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else{
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}
console.log(suscription())

let suscriptionType = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];

    let suscriptionInformation = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    ];

    let userSuscription = "Expert";

    for (let i=0; i < suscriptionType.length; i++) {
      if (userSuscription == suscriptionType[i]) {
          console.log(`Estas suscrito al plan ${suscriptionType[i]} en el cual ${infoSuscripción[i]}`)
      }
    }

// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// let i = 0;
// while ( i < 5){
//     i++;
//     console.log("El valor de i es: " + i);
// }

// // for (let i = 10; i >= 2; i--) {
// //     console.log("El valor de i es: " + i);
// // }
// let i = 10;
// while(i >= 2){
//     i--;
//     console.log("El valor de i es: " + i);
// }

let num1 = 2;
let num2 = 2;
let result = num1 + num2;
function question (num1, num2){
    let pregunta=prompt("Cuanto es 2 + 2?");
    if(pregunta !== result){
        console.log("respuesta incorrecta, intenta nuevamente")
    }else{
        console.log("congratulations!")
    }
}

