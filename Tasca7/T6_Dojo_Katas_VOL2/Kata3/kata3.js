function trainingDays() {
    var events = {
        'marato': 50,
        'mitja marato': 30,
        'cursa 10k': 15,
        'triatlo': 70
    };
    var athleteName = prompt('Introdueix el teu nom');
    if (athleteName === null || !athleteExists(athleteName)) {
        alert('Athlete desconegut');
        return; // Retorno temprano si el atleta no existe o cancela el prompt
    }
    var chooseEvent = prompt('Introdueix l\'event seleccionat');
    if (chooseEvent === null) {
        alert('No s\'ha seleccionat cap event.');
        return;
    }
    chooseEvent = chooseEvent.toLowerCase();
    if (events.hasOwnProperty(chooseEvent)) {
        alert("Tens ".concat(events[chooseEvent], " dies d'entrenament"));
    }
    else {
        alert('Event no localitzat');
    }
}
function athleteExists(athleteName) {
    var athletes = ["yasser", "luis", "sergi", "roger", "yeray"];
    return athletes.includes(athleteName.toLowerCase());
}
trainingDays();
