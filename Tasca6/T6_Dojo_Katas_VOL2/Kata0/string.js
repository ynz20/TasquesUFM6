/*
1. Escriu una funció que accepti dos strings com a arguments (nom i cognom)
i retorni una cadena amb el nom complet en majúscules i els cognoms en minúscules.
*/

function formatName(firstName, lastName) {
    return `${firstName.toUpperCase()} ${lastName.toLowerCase()}`;
}

// Exemple d'ús
console.log(formatName("Joan", "PEREZ")); // "JOAN perez"

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que accepti un paràgraf i retorni un array de paraules separades.
*/

function paragraphToArray(paragraph) {
    return paragraph.split(' ');
}

// Exemple d'ús
console.log(paragraphToArray("Això és un paràgraf de prova.")); // ["Això", "és", "un", "paràgraf", "de", "prova."]

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que accepti una frase i retorni només els 5 primers caràcters.
*/

function getFirstFiveCharacters(phrase) {
    return phrase.substring(0, 5);
}

// Exemple d'ús
console.log(getFirstFiveCharacters("Hello, world!")); // "Hello"
