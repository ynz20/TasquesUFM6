function playGame() {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    if (userChoice === null) {
        return;
    }

    let result = determineWinner(userChoice, computerChoice);
    alert(`Tu has triat: ${userChoice}\nL'ordinador ha triat: ${computerChoice}\nResultat: ${result}`);
}

function getComputerChoice() {
    const choicesAvailable = ['pedra', 'paper', 'tisores'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choicesAvailable[randomChoice];
}

function getUserChoice() {
    let userChoice = prompt('Introdueix la teva tria (pedra, paper o tisores):');
    userChoice = userChoice ? userChoice.toLowerCase() : null;

    if (userChoice === 'pedra' || userChoice === 'paper' || userChoice === 'tisores') {
        return userChoice;
    } else {
        alert('Selecció no vàlida. Selecciona pedra, paper o tisores.');
        return null;
    }
}

function determineWinner(userChoice: string, computerChoice: string) {
    if (userChoice === computerChoice) {
        return 'És un empat';
    }

    if (userChoice === 'pedra') {
        return computerChoice === 'tisores' ? 'Has guanyat!' : 'Has perdut!';
    }

    if (userChoice === 'paper') {
        return computerChoice === 'pedra' ? 'Has guanyat!' : 'Has perdut!';
    }

    if (userChoice === 'tisores') {
        return computerChoice === 'paper' ? 'Has guanyat!' : 'Has perdut!';
    }
}

playGame();
