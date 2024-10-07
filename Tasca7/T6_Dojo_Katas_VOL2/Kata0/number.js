/*
Escriu una funció que accepti un número decimal i el retorni arrodonit a dues decimals.
*/

function arrodonirDecimal(num) {
    return Number(num.toFixed(2)); // Arrodonir a dues decimals
}

// Exemple d'ús
console.log(arrodonirDecimal(3.14159)); // 3.14

// -----------------------------------------------------------------------------------------------------------------------------------------
/*
Escriu una funció que prengui dues cadenes (una conté un enter, l'altra un decimal) i les converteixi al seu tipus numèric corresponent.
*/

function convertirCadenes(a, b) {
    const enter = parseInt(a); // Converteix la cadena a un enter
    const decimal = parseFloat(b); // Converteix la cadena a un decimal
    return { enter, decimal }; // Retorna un objecte amb els valors convertits
}

// Exemple d'ús
console.log(convertirCadenes("42", "3.14")); // { enter: 42, decimal: 3.14 }
// -----------------------------------------------------------------------------------------------------------------------------------------
/*
Escriu una funció que accepti un número en forma de cadena i el multipliqui per 10 després de convertir-lo a nombre.
*/

function multiplicarPerDeu(cadena) {
    const num = Number(cadena); // Converteix la cadena a número
    return num * 10; // Multiplica el número per 10
}

// Exemple d'ús
console.log(multiplicarPerDeu("5")); // 50
