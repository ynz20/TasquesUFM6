function playGame() {
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();
    if (userChoice === null) {
        return;
    }
    var result = determineWinner(userChoice, computerChoice);
    alert("Tu has triat: ".concat(userChoice, "\nL'ordinador ha triat: ").concat(computerChoice, "\nResultat: ").concat(result));
}
function getComputerChoice() {
    var choicesAvailable = ['pedra', 'paper', 'tisores'];
    var randomChoice = Math.floor(Math.random() * 3);
    return choicesAvailable[randomChoice];
}
function getUserChoice() {
    var userChoice = prompt('Introdueix la teva tria (pedra, paper o tisores):');
    userChoice = userChoice ? userChoice.toLowerCase() : null;
    if (userChoice === 'pedra' || userChoice === 'paper' || userChoice === 'tisores') {
        return userChoice;
    }
    else {
        alert('Selecció no vàlida. Selecciona pedra, paper o tisores.');
        return null;
    }
}
function determineWinner(userChoice, computerChoice) {
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
