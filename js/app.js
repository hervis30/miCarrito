//const body = document.querySelector('body');
//body.classList.add('fondo');
//body.classList.remove('fondo');

//const card = document.querySelector('.card');
//console.log(card);
//console.log(card.children[1]);
//console.log(card.children[1]).console.log(card.children[1]);

const row = document.querySelector('#row');
const card = document.createElement('div');
const nombreCurso = document.createElement('h2');
const imagenCurso = document.createElement('img');
const imagenTres = document.createElement('img');
const nombreProfe = document.createElement('p');
const boton = document.createElement('button');

nombreCurso.textContent = 'nombre escudo';
imagenCurso.src = 'https://variedadesdecolombia.com/wp-content/uploads/2014/07/escudo-de-colombia-y-su-significado-768x512.jpg';
imagenCurso.classList.add('imagen-curso', 'u-full-width');


imagenTres.classList.add('imagen-curso', 'u-full-width');
boton.classList.add('button-primary');

nombreProfe.textContent = 'escudo';
boton.textContent = 'agregar al carrito';



card.append(imagenCurso, nombreCurso, nombreProfe, boton);
row.append(card);
console.log(card);

const rowDos = document.querySelector('#row');
const cardDos = document.createElement('div');
const nombreCursoDos = document.createElement('h2');
const imagenCursoDos = document.createElement('img');
const nombreProfeDos = document.createElement('p');
const botonDOS = document.createElement('button');

nombreCursoDos.textContent = 'seleccion colombia';
imagenCursoDos.src = 'https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/03/21/16478288866608.jpg';
imagenCursoDos.classList.add('imagen-curso', 'u-full-width');
nombreProfeDos.textContent = 'natalia';
botonDOS.textContent = 'agregar al carrito';

cardDos.append(imagenCursoDos, nombreCursoDos, nombreProfeDos, botonDOS);
row.append(cardDos);
console.log(cardDos);


imagenCursoDos.classList.add('imagen-curso', 'u-full-width');