/*
Escriu una funció que comprovi si una cadena conté números.
*/
function contéNúmeros(cadena) {
    const regex = /\d/; // Expressió regular per trobar dígits
    return regex.test(cadena); // Retorna true si la cadena conté números
}

// Exemple d'ús
console.log(contéNúmeros("Hola123")); // true
console.log(contéNúmeros("Hola")); // false

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que reemplaçi totes les vocals d'una cadena amb un asterisc `*`.
*/
function reemplaçaVocals(cadena) {
    const regex = /[aeiou]/gi; // Expressió regular per trobar vocals (case insensitive)
    return cadena.replace(regex, '*'); // Substitueix les vocals per '*'
}

// Exemple d'ús
console.log(reemplaçaVocals("Hola món")); // H*l* m*n

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que accepti una cadena i comprovi si aquesta cadena comença amb una lletra majúscula.
*/
function començaAmbMajúscula(cadena) {
    const regex = /^[A-Z]/; // Expressió regular per trobar una majúscula al principi
    return regex.test(cadena); // Retorna true si la cadena comença amb majúscula
}

// Exemple d'ús
console.log(començaAmbMajúscula("Hola")); // true
console.log(començaAmbMajúscula("hola")); // false
