"use strict";
function whale() {
    let input = prompt('Introdueix una frase'); //hola
    const vocals = ["a", "e", "i", "o", "u"];
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let caracter = input[i].toLowerCase();
        if (vocals.includes(caracter)) {
            result.push(caracter);
            if (caracter === 'e' || caracter === 'u') {
                result.push(caracter);
            }
        }
    }
    let resultString = result.join('').toUpperCase();
    // Mostrar el resultat
    alert(resultString);
}
whale();
