"use strict";
function caracterRestant() {
    let s = 'leetscode';
    const dictionari = ['leet', 'code', 'leetcode'];
    for (let word of dictionari) {
        if (s.includes(word)) {
            s = s.replace(word, '');
            console.log(s);
        }
    }
    return s.length;
}
console.log(caracterRestant());
/*function caracterRestant() {
    let s = 'sayhelloworld';
    const dictionari = ['hola', 'world', 'hello'];
    let remainingString = s;

    // Per cada paraula en el diccionari, comprovem si està dins la cadena
    for (let word of dictionari) {
        while (remainingString.includes(word)) {
            // Si trobem una coincidència, eliminem aquesta part de la cadena
            remainingString = remainingString.replace(word, '');
            console.log(remainingString);
        }
    }

    // El resultat és la longitud de les lletres restants que no encaixen
    return remainingString.length;
}

// Exemple d'ús
console.log(caracterRestant()); // Sortida: 3
*/ 
