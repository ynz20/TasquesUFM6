[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/UbYVPhD2)
### ES6

ECMAScript, o ES, és una versió estandarditzada de JavaScript. Com que tots els navegadors principals segueixen aquesta especificació, els termes ECMAScript i JavaScript es poden utilitzar de manera intercanviable.

La major part de JavaScript que has après fins ara correspon a ES5 (ECMAScript 5), que es va finalitzar el 2009. Tot i que encara pots escriure programes en ES5, JavaScript està en constant evolució, i cada any es llancen noves funcionalitats.

ES6, llançat el 2015, va afegir moltes noves característiques poderoses al llenguatge. Les grans aportacions de JavaScript des de ES6 (2015) han estat nombroses, i han anat millorant contínuament el llenguatge per fer-lo més modern, eficient i fàcil de treballar. Aquí tens un resum de les principals millores introduïdes a partir d'ES6:

### 1. **ES6 (2015)** - *Una de les actualitzacions més significatives:*

- **Arrow Functions**: Sintaxi més curta per definir funcions i un comportament més senzill amb el context del `this`.
- **Classes**: Introducció de la sintaxi de classes per a objectes i herència basada en prototips, simplificant el model tradicional de JavaScript.
- **Let i Const**: Millora en la gestió de variables amb nous tipus de declaració (`let` per àmbit de bloc i `const` per constants).
- **Template Literals**: Sintaxi millorada per treballar amb cadenes de text mitjançant el caràcter de backtick (\`\\`) i expressions embegudes amb `${}`.
- **Destructuring**: Permet extreure valors d'objectes i arrays de manera senzilla.
- **Modules (import/export)**: Suport nadiu per modularitzar el codi i importar/exportar funcions, variables, etc., entre fitxers.
- **Promeses (Promises)**: Millora la gestió del codi asíncron, facilitant el tractament d'operacions com les crides a l'API o la gestió de temps d'espera.

En aquesta pràctica treballarem sobretot entorn d’aquestes millores que es van introduir a ES6, però et deixo un resum de les principals aportacions que s’han anat introduint al llarg dels anys:

### 2. **ES7 (2016)** - *Pocs canvis però útils:*

- **Array.prototype.includes**: Introducció d'aquest mètode per comprovar si un array inclou un valor, fent-ho més clar i llegible.
- **Exponentiation Operator (`*`)**: Un operador més curt per realitzar elevació a potències, com ara `2 ** 3`.

### 3. **ES8 (2017)** - *Millores en la gestió de cadenes i objectes:*

- **Async/Await**: Una millora sobre les promeses per simplificar la sintaxi de les funcions asíncrones, fent-les semblar síncrones.
- **Object.entries() i Object.values()**: Faciliten la iteració sobre les propietats i valors d'un objecte.
- **String padding**: Mètodes per omplir cadenes de text (`padStart()` i `padEnd()`).

### 4. **ES9 (2018)** - *Millores en objectes i asíncron:*

- **Rest/Spread Properties for Objects**: Aplicació del rest i spread operator a objectes (`...`), permetent clonar o fusionar objectes.
- **Asynchronous Iteration**: Suport per iterar sobre dades asíncrones amb `for await...of`.

### 5. **ES10 (2019)** - *Novetats en arrays i treball amb cadenes:*

- **Array.prototype.flat() i flatMap()**: Permet aplanar arrays de múltiples nivells de profunditat.
- **Optional catch binding**: Ja no és necessari especificar un paràmetre en `catch`.
- **Object.fromEntries()**: Converteix arrays en objectes.

### 6. **ES11 (2020)** - *Funcions avançades i millores en arrays:*

- **Nullish Coalescing (`??`)**: Permet assignar valors per defecte només si el valor és `null` o `undefined`.
- **Optional Chaining (`?.`)**: Simplifica l'accés a propietats profundes d'objectes que podrien ser `undefined` o `null`.
- **BigInt**: Nou tipus de dades per treballar amb nombres enters molt grans.
- **Dynamic Imports**: Carrega de mòduls dinàmica i asíncrona.

### 7. **ES12 (2021)** - *Millores en el llenguatge:*

- **Logical Assignment Operators**: Nous operadors com `&&=`, `||=`, i `??=` per combinar lògica i assignació en un sol pas.
- **String.prototype.replaceAll()**: Substitueix totes les ocurrències d'una cadena en una altra de manera més intuïtiva.
- **Numeric Separators**: Permet utilitzar guions baixos per millorar la llegibilitat dels nombres (`1_000_000`).

### 8. **ES13 (2022)** - *Millores menors però útils:*

- **Top-Level Await**: Permet utilitzar `await` directament al nivell més alt d'un mòdul sense haver de crear funcions asíncrones.

### 9. **ES14 (2023)** - *Actualitzacions recents:*

- **Array.findLast() i Array.findLastIndex()**: Permet trobar l'últim element en un array que compleix una condició.
- **Hashbang (`#!`) Support**: Suport per scripts executables a la línia de comandaments.