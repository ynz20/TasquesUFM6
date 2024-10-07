export function fizzBuzz(n){
    if (n % 3 === 0 && n % 5 === 0) {
        return "BobEsponja";
    } else if (n % 3 === 0) {
        return "Bob";
    } else if (n % 5 === 0) {
        return "Esponja";
    } else {
        return n;
    }
}