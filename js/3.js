let dado1, dado2, suma;
let contador = 0;
let resultados = [];

// If you want a random number between 1 and 10, multiply the results of Math.random by 10, then round up or down.
// Use .floor to round down to a whole number
// Use .ceil to round up to a whole number
// Use .round to round to the nearest whole number

while (contador < 50) {
    // sumar dados
    dado1 = Math.ceil(Math.random() * 6);
    dado2 = Math.ceil(Math.random() * 6);
    suma = dado1 + dado2;
    // ver dado 1 + dado 2 + resultado
    document.write("<br>Dado 1: " + dado1);
    document.write("<br>Dado 2: " + dado2);
    document.write("<br>Resultado suma: " + suma);
    resultados.push(suma);
    document.write("<br><small>Contador: " + contador + "</small>");
    document.write("<br>");
    // incrementar contador
    contador++;
    // agregar elementos a un array
}

// ver resultados
document.write("<br>Array con los resultados: " + resultados);