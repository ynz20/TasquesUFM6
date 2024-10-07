function captcha(intents) {
    if (intents === void 0) { intents = 3; }
    if (intents === 0) {
        alert('Has esgotat tots els intents. Prova-ho més tard.');
        return;
    }
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var operacio = Math.floor(Math.random() * 2);
    var resultat;
    var resposta;
    if (operacio === 0) {
        resultat = num1 - num2;
        resposta = prompt("Quant \u00E9s ".concat(num1, " - ").concat(num2, "?"));
    }
    else {
        resultat = num1 + num2;
        resposta = prompt("Quant \u00E9s ".concat(num1, " + ").concat(num2, "?"));
    }
    if (resposta !== null) {
        var respostaNum = parseInt(resposta, 10);
        result(respostaNum, resultat, intents);
    }
    else {
        alert('No has proporcionat una resposta vàlida.');
    }
}
function result(resposta, resultat, intents) {
    if (resposta === resultat) {
        alert('Resposta correcta');
    }
    else {
        alert("Resposta incorrecta. Et queden ".concat(intents - 1, " intents."));
        captcha(intents - 1);
    }
}
captcha();
