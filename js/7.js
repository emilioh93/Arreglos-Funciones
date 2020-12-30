// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

// solicitar numero
// función: TablaDeMultiplicar
// resultados del 1 al 10 (for?)

let numero = parseInt(prompt("Ejercicio 4: Ingrese número"));

function TablaDeMultiplicar(numero) {
    this.numero = numero;
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        document.write(numero + " x " + i + " = " + resultado + "<br>");
    }
}

TablaDeMultiplicar(numero);