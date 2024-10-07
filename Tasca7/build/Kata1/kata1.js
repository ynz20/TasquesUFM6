"use strict";
function captcha(intents = 3) {
    if (intents === 0) {
        alert('Has esgotat tots els intents. Prova-ho més tard.');
        return;
    }
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let operacio = Math.floor(Math.random() * 2);
    let resultat;
    let resposta;
    if (operacio === 0) {
        resultat = num1 - num2;
        resposta = prompt(`Quant és ${num1} - ${num2}?`);
    }
    else {
        resultat = num1 + num2;
        resposta = prompt(`Quant és ${num1} + ${num2}?`);
    }
    result(resposta, resultat, intents);
}
function result(resposta, resultat, intents) {
    if (parseInt(resposta) === resultat) {
        alert('Resposta correcta');
    }
    else {
        alert(`Resposta incorrecta. Et queden ${intents - 1} intents.`);
        captcha(intents - 1);
    }
}
captcha();
