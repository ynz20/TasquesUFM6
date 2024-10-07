"use strict";
function playGame() {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
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
    userChoice = userChoice.toLowerCase();
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
        if (computerChoice === 'tisores') {
            return 'Has guanyat!';
        }
        else {
            return 'Has perdut!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'pedra') {
            return 'Has guanyat!';
        }
        else {
            return 'Has perdut';
        }
    }
    if (userChoice === 'tisores') {
        if (computerChoice === 'paper') {
            return 'Has guanyat';
        }
        else {
            return 'Has perdut';
        }
    }
}
playGame();
