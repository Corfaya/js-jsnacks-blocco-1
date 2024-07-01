/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa */
// array
let guests = ["fabrizio", "luigi", "alessio", "anna", "laura", "nick", "daisy"]
// name value
let name_guest = prompt("Inserisca il suo nome").toLocaleLowerCase();

// if statement
if(guests.includes(name_guest)) {
    console.log(`Caro/a ${name_guest}, è invitato/a alla festa del grande Gatsby. Sarebbe un onore averla come ospite.`)
} else {
    console.log(`Gentilissimo/a ${name_guest}, non ci risulta di averla invitata alla festa del grande Gatsby.`)
}