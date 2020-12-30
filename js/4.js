// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// debo pasar parámetro: int
// resultado: par o impar
// imprimir

function Divisibilidad(numero) {
    this.numero = numero;
    if (numero % 2 == 0) {
        document.write("El número " + numero + " es par");
    } else {
        document.write("El número " + numero + " es impar");
    }
}

Divisibilidad(5);
document.write("<br>");
Divisibilidad(10);