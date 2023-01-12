// 1. que es un array?
// lista de elementos
const array = [1, 'string', true];

// 2. que es un obj?
// lista de elementos PERO cada elemento tiene un nombre clave(key)
const obj = {
    nombre: 'fulanito',
    edad: 3,
    comidas:['pollo', 'vegetales']
}

// 3. cuando en mejor usar obj o arrays?
// arrays: cuando lo que haremos en un elemento es lo mismo q en todos los demas.
// obj: cuando los nombres de cada elemento son importantes para nuestro algoritmo.

// 4. puedo mezclar obj y arrays?
// si, los array pueden guardar cualquier tipo de dato como objetos y 
// los objetos pueden guardar arrays entre sus propiedades

// 5.crea funcion que pueda recibir cualquier array como parametro e imprima su primer elemento
function imprimirPrimerElemento (array){
    console.log(array[0]);
}
imprimirPrimerElemento(array)

// funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno
function imprimirElementoPorElemento(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
imprimirElementoPorElemento(array);

// funcion que reciba cualquier obj como parametro e imprima todos sus elementos uno por uno
Object.values(obj); //devuelve un arreglo

function imprimirElementoPorElementoObjeto(obj){
    let arr = Object.values(obj);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
imprimirElementoPorElementoObjeto(obj)