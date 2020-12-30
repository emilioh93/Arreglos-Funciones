// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// función: 
// argumento: string
// saber si hay solo mayúsculas, solo minúsculas o ambas

function MayusOrMinus(cadena) {
    this.cadena = cadena;
    // si cadena contiene solo mayúsculas
    if (cadena == cadena.toUpperCase()) {
        document.write("<br>La cadena " + cadena + ", sólo contiene mayúsculas");
    } else if (cadena == cadena.toLowerCase()) {
        document.write("<br>La cadena " + cadena + ", sólo contiene minúsculas");
    } else {
        document.write("<br>La cadena " + cadena + ", tiene mayúsculas y minúsculas");
    }
}

MayusOrMinus("HOLA, ¿CÓMO ESTÁS?");
MayusOrMinus("hola, ¿cómo estás?");
MayusOrMinus("Hola. ¿Cómo estás?");