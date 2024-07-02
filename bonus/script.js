/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */
// Sum initialised to 0
let sum = 0;

// for statement
for (let i = 0; i < 10; i++) {
    // value from the prompt
    let user_number = prompt("Inserire un numero")
    // from string to number
    let toNum = parseInt(user_number);
    // add value to sum
    sum += toNum;
}

console.log(`La somma dei numeri inseriti è: ${sum}`)
