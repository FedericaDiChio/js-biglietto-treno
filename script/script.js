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
4. calcolare biglietti finali in base all'età;
*/

var priceDisplay = document.getElementById("ticket");
var message = "Il prezzo del tuo biglietto è di € ";
// console.log(priceDisplay);


// Variables Users
var userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
var userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
// console.log(userKm);
// console.log(userAge);

// Variables Ticket Fullprice
var ticketPrice = userKm * 0.21; 
// console.log(ticketPrice);


// Calculation
if (userAge < 18) {
    ticketPrice *= 0.8;
    // console.log(ticketPrice);
}

if (userAge > 65) {
    ticketPrice *= 0.6;
    // console.log(ticketPrice);
} 

// Final Price 
priceDisplay.innerHTML = message + ticketPrice.toFixed(2);
