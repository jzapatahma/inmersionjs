//
var nombreUsuario = prompt(
  "Bienvenido a nuestro Sistema. Por favor Ingrese su Nombre y Apellido"
);
if (nombreUsuario != null) {
  //  Convertidor de Dolar a Pesos Colombianos
  alert("Convertidor de Dolar a Pesos Colombianos");
  var valorDolar = 3842.3;
  var cantidadDolar = prompt(
    "Ingresa la cantidad de Dolares a convertir a pesos colombianos"
  );
  if (cantidadDolar != null) {
    var conversionDP = valorDolar * cantidadDolar;
    let dolarPesoCol = conversionDP.toLocaleString("col", {
      style: "currency",
      currency: "COP",
      maximunFractionDigits: 4,
      mininumFractionDigits: 3
    });
    alert(
      `Sr ${nombreUsuario}, Su conversion es ${dolarPesoCol} pesos colombia`
    );
    //
    //******************************************
    // Convertidor de Cryptomoneda a Pesos Colombianos
    alert("Convertidor de CryptoMoneda a Pesos Colombianos");
    var valorCrypto = 269250071.09;
    var cantidadCrypto = prompt(
      "Ingresa la cantidad de CryptoMonedas a convertir a pesos colombianos"
    );
    if (cantidadCrypto != null) {
      var conversionCP = valorCrypto * cantidadCrypto;
      let cryptoPesoCol = conversionCP.toLocaleString("col", {
        style: "currency",
        currency: "COP",
        maximunFractionDigits: 4,
        mininumFractionDigits: 3
      });
      alert(
        `Sr ${nombreUsuario}, Su conversion es ${cryptoPesoCol} pesos colombia`
      );
      //
      //******************************************
      // Convertidor de grados Celsius a Fahrenheit
      alert("Convertidor de de grados Celsius a Fahrenheit");
      var valorCelsius = prompt(
        "Ingresa el valor en grados Celsius a convertir en Fahrenheit"
      );
      if (valorCelsius != null) {
        var valorEnFahrenheit = valorCelsius * 1.8 + 32;
        alert(
          `Sr ${nombreUsuario}, Su conversion de temperatura en en grados Fahrenheit es: ${valorEnFahrenheit.toFixed(
            2
          )}`
        );
      }
    }
  }
}
//
// Despedida
var fechaHora = new Date().toLocaleString();
alert(`Muchas gracias por su visita, feliz dia hoy: ${fechaHora}`);
//
// hacer conversion a cryptomoneda  ***Tarea Realizada
// aparecer el nombre               ***Tarea Realizada
// hacer escalas de termperatura.   ***Tarea Realizada