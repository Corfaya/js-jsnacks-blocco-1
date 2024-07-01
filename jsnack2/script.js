/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array */
// empty array
let odd = [];

// for statement
for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Inserisci un numero"));
    // if statement
    if (num % 2 !== 0) {
        odd.push(num);
    }
}

console.log(odd)