/*

// Seleccionamos todos los elementos con la clase "parrafo"
const parrafos = document.getElementsByClassName('parrafo');
// parrafos es una colección, no un solo elemento.
console.log(parrafos.length); // Muestra: 2
// Para cambiarles el estilo, debemos recorrer la colección.
for (let i = 0; i < parrafos.length; i++) {
 parrafos[i].style.fontWeight = 'bold';
}

/*

// Seleccionamos todos los elementos de etiqueta <p> en el documento
const todosLosParrafos = document.getElementsByTagName('p');
console.log(todosLosParrafos.length); // Muestra: 3 (incluyendo el que está dentro del div)
// Cambiamos el color de fondo de todos los párrafos
for (let i = 0; i < todosLosParrafos.length; i++) {
 todosLosParrafos[i].style.backgroundColor = '#f0f0f0';
}

*/




/*
// Selecciona el elemento con el ID "titulo-principal"
const titulo = document.querySelector('#titulo');
titulo.style.color = 'red';


// Seleccionar un elemento anidado - Selecciona el PRIMER h2 que esté dentro de un article
const primerSubtitulo = document.querySelector('article h2');
primerSubtitulo.textContent = 'Noticia para impactar el conocimiento ';

*/

/*

// Seleccionamos todos los elementos que tengan la clase "post"
const todosLosPosts = document.querySelectorAll('.post');
console.log(todosLosPosts.length); // Muestra: 2

*/
