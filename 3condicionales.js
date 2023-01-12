// 1. que es un condicional?
// forma en q ejecutamos un bloque de codigo dependiendo de una condicion o validacion.

// 2. tipos de condicionales?
// if(else, else if), switch
// IF: nos permite hacer validacion distintas en cada validacion si queremos.
// SWITCH: en sus cases compara la misma variable o condicion 

// 3. combinar condiciones y condicionales?
// las funciones pueden encapsular cualquier bloque de codigo.

const tipoDeSuscripcion = "Basic";

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

if(tipoDeSuscripcion === 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion === 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion === 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion === 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else{
    console.log('no tienes suscripcion.')
}

function conseguirTipoSuscripcion(suscripcion){
    if(suscripcion === 'Free'){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if(suscripcion === 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if(suscripcion === 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if(suscripcion === 'ExpertPlus'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    } 
    else{
        console.warn('no existe esa suscripcion.')
    }
}
conseguirTipoSuscripcion('Free');

// solucion con 1 solo condicional y arrays u obj
const tiposDeSuscripciones = {
    free : "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function conseguirSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('esa suscripcion no existe');
}
conseguirSuscripcion('free');