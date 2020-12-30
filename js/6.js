// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro es p = 2*(a +b)

// 2 prompt: lado 1 y lado 2
// función de perímetro

let lado1 = parseInt(prompt("Ingrese lado 1"));
let lado2 = parseInt(prompt("Ingrese lado 2"));

function Perimetro(lado1, lado2) {
    this.lado1 = lado1;
    this.lado2 = lado2;

    let p = 2 * (lado1 + lado2);
    document.write("El perímetro del rectángulo es de: " + p);
}

Perimetro(lado1, lado2);