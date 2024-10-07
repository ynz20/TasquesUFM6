/*
Escriu una funció que generi un número aleatori entre 1 i 100, i després l'arrodoneixi a l'enter més proper.
*/
function numeroAleatoriArrodonit() {
    const numAleatori = Math.random() * 100 + 1; // Genera un número aleatori entre 1 i 100
    return Math.round(numAleatori); // Arrodoneix a l'enter més proper
}

// Exemple d'ús
console.log(numeroAleatoriArrodonit()); // Mostra un número aleatori arrodonit

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que accepti un número i retorni la seva arrel quadrada.
*/
function arrelQuadrada(num) {
    return Math.sqrt(num); // Retorna l'arrel quadrada del número
}

// Exemple d'ús
console.log(arrelQuadrada(16)); // 4
console.log(arrelQuadrada(25)); // 5

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que calculi l'àrea d'un cercle donat el radi.
*/
function areaCercle(radi) {
    return Math.PI * Math.pow(radi, 2); // Calcula l'àrea del cercle
}

// Exemple d'ús
console.log(areaCercle(5)); // 78.53981633974483 (àrea del cercle amb radi 5)
