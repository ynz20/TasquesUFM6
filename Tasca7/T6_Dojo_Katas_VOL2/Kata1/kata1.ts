function captcha(intents = 3): void {
    if (intents === 0) {
        alert('Has esgotat tots els intents. Prova-ho més tard.');
        return;
    }

    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let operacio = Math.floor(Math.random() * 2);

    let resultat: number;
    let resposta: string | null;

    if (operacio === 0) {
        resultat = num1 - num2;
        resposta = prompt(`Quant és ${num1} - ${num2}?`);
    } else {
        resultat = num1 + num2;
        resposta = prompt(`Quant és ${num1} + ${num2}?`);
    }
    
    if (resposta !== null) {
        const respostaNum = parseInt(resposta, 10);
        result(respostaNum, resultat, intents);
    } else {
        alert('No has proporcionat una resposta vàlida.');
    }
}

function result(resposta: number, resultat: number, intents: number): void {
    if (resposta === resultat) {
        alert('Resposta correcta');
    } else {
        alert(`Resposta incorrecta. Et queden ${intents - 1} intents.`);
        captcha(intents - 1);
    }
}

captcha();
