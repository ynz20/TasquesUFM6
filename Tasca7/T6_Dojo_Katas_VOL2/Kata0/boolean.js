/*
Escriu una funció que accepti una cadena i retorni `true` si la cadena no està buida i `false` si ho està.
*/

function cadenaNoBuida(cadena) {
    return cadena !== ""; // Retorna true si la cadena no és buida
}

// Exemple d'ús
console.log(cadenaNoBuida("Hola")); // true
console.log(cadenaNoBuida("")); // false

// -----------------------------------------------------------------------------------------------------------------------------------------
/*
Escriu una funció que accepti diferents valors (númerics, strings, etc.) i retorni el seu equivalent booleà.
*/
function valorBoolea(valor) {
    return Boolean(valor); // Converteix el valor a booleà
}

// Exemple d'ús
console.log(valorBoolea(0)); // false
console.log(valorBoolea("text")); // true
console.log(valorBoolea(null)); // false
console.log(valorBoolea([])); // true


// -----------------------------------------------------------------------------------------------------------------------------------------
/*
Escriu una funció que comprovi si un número és positiu, retornant `true` si ho és i `false` si és negatiu o zero.
*/

function esPositiu(num) {
    return num > 0; // Retorna true si el número és positiu
}

// Exemple d'ús
console.log(esPositiu(5)); // true
console.log(esPositiu(-3)); // false
console.log(esPositiu(0)); // false
