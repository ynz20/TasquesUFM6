export function counter() {
    // Variable interna per mantenir el compte
    let count = 0; // Inicialitzem el comptador a 0
    
    // Retorna una funció que incrementa el comptador cada vegada que s'executa
    return function() {
        count += 1; // Incrementem el comptador en 1
        return count; // Retornem el valor actual del comptador
    };
}
//Creem varis contadors, cada un és indepenent (#Extra)
const count1 = counter(); // Primer comptador
const count2 = counter(); // Segon comptador

/*
La funció counter() implementa un patró de closure en JavaScript.
A l'executar counter(), es crea una variable local anomenada count, inicialitzada a 0, que no és accessible des de l'exterior.
A continuació, counter() retorna una funció interna que incrementa i retorna el valor de count cada vegada que s'executa.

Aquesta funció interna pot accedir a la variable count gràcies al closure, mantenint el seu valor entre les crides.
Això permet que el comptador s'incrementi de manera independent cada vegada que es crida la funció retornada.

En l'exemple d'ús, es crea una instància de counter() i s'assigna a la variable count.
Cada vegada que es crida count(), el valor de count s'incrementa en 1, i es retorna el valor actual.
Això fa que, per cada crida consecutiva, el resultat sigui 1, 2 i 3, respectivament.
*/

/* --- Extra2 
export function counter() {
  let comptador = 0; // Variable privada del comptador
  return {
    increment: function () {
      comptador++; // Incrementa el comptador
      return comptador; // Retorna el valor actual del comptador
    },
    reset: function () {
      comptador = 0; // Reinicia el comptador a 0
      return comptador; // Retorna el comptador reiniciat
    },
  };
}

const c = counter();

const d = counter();
console.log(c.increment());
console.log(c.increment());
console.log(c.reset());

*/
