/*
Escriu una funció que retorni la data i hora actual.
*/
function dataActual() {
    return new Date(); // Retorna la data i hora actual
}

// Exemple d'ús
console.log(dataActual()); // Mostra la data i hora actual

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que prengui dues dates com a cadenes en format ISO (`YYYY-MM-DD`) i calculi el nombre de dies entre aquestes dates.
*/
function diesEntreDates(data1, data2) {
    const inici = new Date(data1); // Converteix la cadena a un objecte Date
    const fi = new Date(data2); // Converteix la cadena a un objecte Date
    const diferència = Math.abs(fi - inici); // Calcula la diferència en mil·lisegons
    return Math.ceil(diferència / (1000 * 60 * 60 * 24)); // Converteix mil·lisegons a dies
}

// Exemple d'ús
console.log(diesEntreDates("2024-01-01", "2024-01-31")); // 30

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que accepti una data i retorni el nom del dia de la setmana corresponent.
*/
function nomDiaSetmana(data) {
    const dia = new Date(data); // Converteix la cadena a un objecte Date
    const opcions = { weekday: 'long' }; // Opcions per obtenir el nom del dia
    return dia.toLocaleDateString('ca-ES', opcions); // Retorna el nom del dia en català
}

// Exemple d'ús
console.log(nomDiaSetmana("2024-09-25")); // "Dimecres"
