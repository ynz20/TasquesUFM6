/*
Escriu una funció que accepti un objecte JavaScript i el converteixi a una cadena JSON.
*/
function objecteADocJSON(objecte) {
    return JSON.stringify(objecte); // Converteix l'objecte a una cadena JSON
}

// Exemple d'ús
const persona = { nom: "Yasser", edat: 30 };
console.log(objecteADocJSON(persona)); // {"nom":"Yasser","edat":30}

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que accepti una cadena JSON i la converteixi en un objecte JavaScript.
*/
function docJSONAObjecte(json) {
    return JSON.parse(json); // Converteix la cadena JSON a un objecte
}

// Exemple d'ús
const jsonString = '{"nom":"Luis","edat":25}';
const objecte = docJSONAObjecte(jsonString);
console.log(objecte); // { nom: 'Luis', edat: 25 }

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que agafi un array d'objectes i el converteixi a una cadena JSON.
*/
function arrayAStringJSON(array) {
    return JSON.stringify(array); // Converteix l'array d'objectes a una cadena JSON
}

// Exemple d'ús
const arrayPersones = [
    { nom: "Sergi", edat: 28 },
    { nom: "Roger", edat: 32 }
];
console.log(arrayAStringJSON(arrayPersones)); // [{"nom":"Sergi","edat":28},{"nom":"Roger","edat":32}]
