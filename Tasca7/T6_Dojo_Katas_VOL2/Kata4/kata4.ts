function whale(): void {
    let input: string | null = prompt('Introdueix una frase');
    const vocals: string[] = ["a", "e", "i", "o", "u"];

    if (input === null) {
        alert('No s\'ha introduït cap frase.');
        return;
    }

    let result: string[] = [];

    for (let i = 0; i < input.length; i++) {
        let caracter: string = input[i].toLowerCase();

        if (vocals.includes(caracter)) {
            result.push(caracter);

            if (caracter === 'e' || caracter === 'u') {
                result.push(caracter);
            }
        }
    }

    let resultString: string = result.join('').toUpperCase();

    alert(resultString);
}

whale();
