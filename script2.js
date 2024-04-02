

document.body.onload = function() {
    setTimeout(function() {
        jugar();
    }, 1000);
  }

function jugar(){
    var nombreUsuario = prompt(
        "Bienvenido a nuestro Juego del Numero Secreto. Por favor Ingrese su Nombre y Apellido"
    );
    var numeroSecreto = parseInt(Math.random() * 100);
    while (numeroDigitado != numeroSecreto) {
      var numeroDigitado = prompt("Ingrese un número entre 1 y 100");
      if (numeroDigitado == null) break; //
      //si el numeroDigitado es igual al número secreto
      if (numeroDigitado == numeroSecreto) {
        alert(
          "¡Acertaste! " +
            `Felicitaciones Sr: ${nombreUsuario} el numero secreto es : ${numeroDigitado}`
        );
      } else if (numeroDigitado > numeroSecreto) {
        alert(
          "Intentalo de nuevo... el número secreto es Menor --- a: " +
            numeroDigitado
        );
      } else if (numeroDigitado < numeroSecreto) {
        alert(
          "Intentalo de nuevo... el número secreto es Mayor +++ a: " +
            numeroDigitado
        );
      }
      if (numeroSecreto === null) {
        break;
      }
    }
    // Despedida
    var fechaHora = new Date().toLocaleString();
    alert(`Muchas gracias por su visita, feliz dia hoy: ${fechaHora}`);
    //
    // hacer conversion a cryptomoneda  ***Tarea Realizada
    // aparecer el nombre               ***Tarea Realizada
    // hacer escalas de termperatura.   ***Tarea Realizada
}
  