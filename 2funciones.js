// 1. que es una funcion?
// forma en que se encapsulan/guardan bloques de codigo reutilizable y ejecutarlos en el futuro.

// 2. cuando me sirve usar una funcion en el codigo?
// cuando tenemos variables o bloques de codigo con cambios q pueden ser parametros y argumentos, que podemos encapsular y reutilizar en el futuro.
// para order y mejorar la legibilidad del codigo

// 3. diferencia entre parametros y argumentos
// las funciones reciben parametros cuando las creamos
// enviamos argumentos al ejecutarlas

function nombreCompleto(a, b) {  
  return a + " " + b;
}
console.log(nombreCompleto("monica", "munoz"));

// convertir este codigo en funcion
const name = 'monica';
const lastName = 'munoz';
const completeName = name + ' '+ lastName;
const nickName = 'momi';
console.log('mi nombre es '+ completeName + ', pero prefiero que me digas '+ nickName + '.');

function saludo (name, lastName, userName){
    const completeName = nombreCompleto(name, lastName);
    console.log('mi nombre es '+ completeName + ', pero prefiero que me digas '+ userName + '.');
}
saludo('Monica', 'Munoz', 'moni');

