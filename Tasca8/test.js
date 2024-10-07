//let hour = 12;
//let greeting = (hour  > 12) ? "Bon dia." : hour < 18 ? "Bona tarda" : "Bona nit";

//console.log(greeting);


function checkAge(age) {
    return (age > 18) ? true || confirm('¿Tus padres te permitieron?') : false;
}

console.log(checkAge(age));