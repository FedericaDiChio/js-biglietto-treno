// CONSOLE LOG 
console.log("JS OK");

// TRACCIA ESERCIZIO 

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere 
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali,
    per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/* 
STEP:
1. creare variabili e prompt per chiedere i km che vuole percorrere e l'età del passeggero;
2. calcolare prezzo del biglietto. 
3. calcolare lo sconto;
4.
*/

// Variables Users
var userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
var userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
var message = "Il prezzo del tuo biglietto è ";
// console.log(userKm);
// console.log(userAge);

// Variables Ticket Fullprice
var ticketKm = 0.21;
var ticketPrice = ticketKm * userKm; 
// console.log(ticketPrice);

// Variables Discount Underage
var underAge = ticketPrice * 20 / 100;
var ticketUnderAge = ticketPrice - underAge;
// Variables Discount Senior
var senior = ticketPrice * 40 / 100;
var ticketSenior = ticketPrice - senior;


// Final price
if (userAge < 18) {
    console.log(message + ticketUnderAge);
} else if (userAge > 65) {
    console.log(message + ticketSenior);
} else {
    console.log (message + ticketPrice);
}
