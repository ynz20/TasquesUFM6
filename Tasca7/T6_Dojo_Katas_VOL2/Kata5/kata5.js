function caracterRestant() {
    var s = 'leetscode';
    var dictionari = ['leet', 'code', 'leetcode'];
    for (var _i = 0, dictionari_1 = dictionari; _i < dictionari_1.length; _i++) {
        var word = dictionari_1[_i];
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
