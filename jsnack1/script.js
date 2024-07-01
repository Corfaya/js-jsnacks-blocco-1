/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa */
// array
let guests = ["Fabrizio", "Luigi", "Alessio", "Anna", "Laura", "Nick", "Daisy"]
// name value
let name_guest = prompt("Inserisca il suo nome");
console.log(name_guest)
// first capital letter
let first_letter = name_guest.slice(0,1).toUpperCase();
let remaining_letters = name_guest.slice(1).toLocaleLowerCase();
let complete_name = first_letter + remaining_letters;

// if statement
if(guests.includes(complete_name)) {
    console.log(`Caro/a ${complete_name}, è invitato/a alla festa del grande Gatsby. Sarebbe un onore averla come ospite.`)
} else {
    console.log(`Gentilissimo/a ${complete_name}, non ci risulta di averla invitata alla festa del grande Gatsby.`)
}