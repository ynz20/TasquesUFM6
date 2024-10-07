/*
Escriu una funció que accepti una altra funció com a argument i l'executi dins del seu cos.
*/
function executaFuncio(funcio) {
    funcio(); // Executa la funció passada com a argument
}

// Exemple d'ús
executaFuncio(() => console.log("Aquesta és una funció executada!")); // Mostra el missatge

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que retorni una altra funció, que simplement mostri un missatge.
*/
function retornaFuncio() {
    return function() {
        console.log("Missatge des de la funció retornada!"); // Missatge a mostrar
    };
}

// Exemple d'ús
const funcioMissatge = retornaFuncio(); // Assigna la funció retornada a una variable
funcioMissatge(); // Executa la funció i mostra el missatge

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
Escriu una funció que accepti dues funcions com a arguments i cridi cada una d'elles successivament.
*/
function cridaDuesFuncions(funcio1, funcio2) {
    funcio1(); // Crida la primera funció
    funcio2(); // Crida la segona funció
}

// Exemple d'ús
cridaDuesFuncions(
    () => console.log("Primera funció cridada!"),
    () => console.log("Segona funció cridada!")
);
