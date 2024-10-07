"use strict";
function trainingDays() {
    const events = {
        'marato': 50,
        'mitja marato': 30,
        'cursa 10k': 15,
        'triatlo': 70
    };
    let athleteName = prompt('Introdueix el teu nom');
    if (athleteExists(athleteName)) {
        let chooseEvent = prompt('Introdueix el event seleccionat').toLowerCase();
        let eventFound = false;
        for (let event in events) {
            if (event.toLowerCase() === chooseEvent) {
                alert(`Tens ${events[event]} dies d'entrenament`);
                eventFound = true;
                break;
            }
        }
        if (!eventFound) {
            alert('Event no localitzat');
        }
    }
    else {
        alert('Athlete desconegut');
    }
}
function athleteExists(athleteName) {
    const athletes = ["yasser", "luis", "sergi", "roger", "yeray"];
    return athletes.includes(athleteName.toLowerCase());
}
trainingDays();
