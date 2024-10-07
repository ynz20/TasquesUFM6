function trainingDays(): void {
    const events: { [key: string]: number } = {
        'marato': 50,
        'mitja marato': 30,
        'cursa 10k': 15,
        'triatlo': 70
    };

    let athleteName: string | null = prompt('Introdueix el teu nom');
    if (athleteName === null || !athleteExists(athleteName)) {
        alert('Athlete desconegut');
        return;
    }

    let chooseEvent: string | null = prompt('Introdueix l\'event seleccionat');
    if (chooseEvent === null) {
        alert('No s\'ha seleccionat cap event.');
        return;
    }

    chooseEvent = chooseEvent.toLowerCase();

    if (events.hasOwnProperty(chooseEvent)) {
        alert(`Tens ${events[chooseEvent]} dies d'entrenament`);
    } else {
        alert('Event no localitzat');
    }
}

function athleteExists(athleteName: string): boolean {
    const athletes: string[] = ["yasser", "luis", "sergi", "roger", "yeray"];
    return athletes.includes(athleteName.toLowerCase());
}

trainingDays();
