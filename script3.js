//
var listaPeliculas = [];
listaPeliculas[0] =
  "https://es.web.img3.acsta.net/medias/nmedia/18/79/70/91/19514464.jpg";
listaPeliculas[1] =
  "https://es.web.img3.acsta.net/pictures/21/08/25/14/35/3349802.jpg";
listaPeliculas[2] =
  "https://m.media-amazon.com/images/S/pv-target-images/7b86f2a7e80941d97c265348873a82c73450c0286ed1d1eeb7d86440ec707de5.jpg";
listaPeliculas[3] =
  "https://decine21.com/img/upload/obras/the-martian-31034/the-martian-31034-c.jpg";
listaPeliculas[4] =
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgEUjKgM0i4Lci43kex9DupojkaZVF36bRQSdqknt0tR6dKHgR";
//Agregamos un titulo a las imagenes
listaPeliculas.push("El Nucleo", "DUNA", "Son como Niños", "Marte", "LUCA");
document.write(
  "<h1 style='color: white;font-weight:700;'>Lista de mis Peliculas Favoritas, cargadas desde Javascript</h1>"
);
//
//for (var i = 0; i < listaPeliculas.length; i = i + 1) {
//  document.write("<img src =" + listaPeliculas[i] + ">");
//}
var np = 0;
var longitudarray = listaPeliculas.length / 2;
while (np < longitudarray) {
  document.write(
    "<img src =" +
      listaPeliculas[np] +
      ">" +
      "<h2 style='color: white;font-weight:350;'>" +
      listaPeliculas[longitudarray + np] +
      "</h2>"
  );
  np++;
}

//Retos
//cambiar el for por el while             ***Tarea realizada
//push para insertar nuevas registros     ***Tarea realizada
//Que el enlace termine con jpg
//Colocarle los nombres a cada pelicula   ***Tarea realizada