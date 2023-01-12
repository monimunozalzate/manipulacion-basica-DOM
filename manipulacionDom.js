//  //metodo: querySelector selecciona el nombre de la etiqueta
//  // querySelectorAll: seleccion y guarda en forma de lista

// const h1 = document.querySelector('h1')
// const p = document.querySelector('p')
// const parrafito = document.querySelector('.parrafito')
// const pid = document.querySelector('#pid')
// const input = document.querySelector('input')

// console.log({
//     h1, p, parrafito, pid, input
// })

// //modificar los elementos HTML desde JS. 
// //InnerHTML: Inserta tanto texto como etiquetas HTML
// //innerText: no inserta codigo
// h1.innerText = 'Patito'
// // h1.innerHTML = 'Tatito <br> Feo';

// //modificar un atributo
// // h1.getAttribute('class') //lee los atributos que tiene el elemento
// // h1.setAttribute('class', 'rojo') //modifica un atributo

// //class
// h1.classList.add('rojo') //agrega
// h1.classList.remove('verde') //elimina una posible clase verde
// h1.classList.toggle('verde') //pone-quita-pone-quita va cambiando
// h1.classList.contains('verde') //especie de condicional, pregunta si nuestro elemento tiene una clase llamada 'verde'

// //modificar value de input
// input.value = '1234'

// //crear elemento desde cero
// const img = document.createElement('img');
// img.setAttribute('src', 'https://tse1.mm.bing.net/th?id=OIP.1DId2PpbduBEyRxx2SjwOQHaE5&pid=Api&P=0')
// pid.append(img); //append, apependChilg: agrega el elemento sin eliminar lo que habia antes


// TRABAJO CON INPUT Y BOTON
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

function btnOnClick (event){
    // console.log(input1.value + input2.value) //concatenando
    console.log(event);
    event.preventDefault();
    const sumaInputs = parseInt(input1.value )+ parseInt(input2.value);
    pResult.innerText = "resultado: "+sumaInputs;
}

// ADD EVENT LISTENER
// btn.addEventListener('click', btnOnClick); //primer parametro evento, 2do la funcion
form.addEventListener('submit', btnOnClick);

// EVENTS
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page
