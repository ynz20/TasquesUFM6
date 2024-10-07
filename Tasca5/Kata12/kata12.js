export function BetweenDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    const diferenciaEnMilisegons = d2.getTime() - d1.getTime();

    const diferenciaEnDies = diferenciaEnMilisegons / (1000 * 3600 * 24);
    
    return diferenciaEnDies;
}