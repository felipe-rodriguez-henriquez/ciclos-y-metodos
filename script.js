var tombola = prompt("Elige un numero del 1 al 5");

switch (tombola) {
  case "1":
    var opcion = prompt("Ingresar un número entre 1 al 100");
    for (let i = 0; i <= opcion; i++) {
      console.log(i);
    }
    break;
  case "2":
    do {
      var opcion = prompt("¿De que color es el caballo blanco de Napoleón?");
    } while (opcion !== "blanco");
    break;
  case "3":
    var nota1 = prompt("Ingresa tu promedio de Matemáticas");
    var nota2 = prompt("Ingresa tu promedio de Física");
    var nota3 = prompt("Ingresa tu promedio de Ciencias");
    var promedio =
      (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    alert(`"Tu promedio general es: ${Math.round(promedio)}"`);
    break;
  case "4":
    alert("Escriba el nombre de 3 frutas");
    var fruta1 = prompt("Ingrese la primera fruta");
    var fruta2 = prompt("Ingrese la segunda fruta");
    var fruta3 = prompt("Ingrese la tercera fruta");
    var frutas = [fruta1, fruta2, fruta3];
    for (var x of frutas) {
      if (x === "manzana") {
        continue;
      }
      console.log(x);
    }
    break;
  case "5":
    var nombre = prompt("Escribe tu nombre");
    var a = 0;
    var e = 0;
    var i = 0;
    var o = 0;
    var u = 0;
    var consonantes = 0;
    for (var x = 0; x < nombre.length; x++) {
      var letra = nombre.charAt(x);
      if (letra.match(/[aeiou]/)) {
        switch (letra) {
          case "a":
            a++;
            break;
          case "e":
            e++;
            break;
          case "i":
            i++;
            break;
          case "o":
            o++;
            break;
          case "u":
            u++;
            break;
        }
      } else if (letra.match(/[bcdfghjklmnpqrstvwxyz]/)) {
        consonantes++;
      }
    }
    var vocales = a + e + i + o + u;
    alert(`"Tu nombre tiene ${vocales} vocales y ${consonantes} consonantes."`);
    break;

  default:
    break;
}
