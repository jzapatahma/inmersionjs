var arrayPeliculas = [];
var listaPeliculas = document.getElementById("listaPeliculas");

function agregarPelicula() {
  var peliculaImg = document.getElementById("peliculaimg");
  var peliculaVideo = document.getElementById("peliculavideo");
  var elemento = "<a href=" + peliculaVideo.value + " target="+"_blank> "+" <img src=" + peliculaImg.value +"></a>";
  // <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a
  arrayPeliculas.push(elemento); // adiciono a la lista.
  mostrarImagenes(); // muestro en pantalla
  document.getElementById("peliculaimg").value = ""; //limpiar texto de captura.
  document.getElementById("peliculavideo").value = ""; //limpiar texto de captura.
}

function mostrarImagenes() {
  listaPeliculas.innerHTML = "";
  for (i = 0; i < arrayPeliculas.length; i++) {
    listaPeliculas.innerHTML += arrayPeliculas[i];
    //listaPeliculas.innerHTML += "<img src =" + arrayPeliculas[i] + ">";
  }
}

//Desafios de los instructures
//
//Desafio que solo se aceptem imagenes   ****
//Redisencionar con click en las imagenes para verlos en Youtube *** Tarea realizada
//Almacenar las peliculas en un array   ***Tarea realizada