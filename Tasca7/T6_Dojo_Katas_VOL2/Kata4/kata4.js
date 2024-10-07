function whale() {
    var input = prompt('Introdueix una frase');
    var vocals = ["a", "e", "i", "o", "u"];
    if (input === null) {
        alert('No s\'ha introduït cap frase.');
        return;
    }
    var result = [];
    for (var i = 0; i < input.length; i++) {
        var caracter = input[i].toLowerCase();
        if (vocals.includes(caracter)) {
            result.push(caracter);
            if (caracter === 'e' || caracter === 'u') {
                result.push(caracter);
            }
        }
    }
    var resultString = result.join('').toUpperCase();
    alert(resultString);
}
whale();
