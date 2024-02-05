//PROGRAMMA INDOVINA NUMERO TRA 1 E 100

// Genera un numero casuale tra 1 e 100
let numberRandom = Math.floor(Math.random() * 100) + 1;

// Chiedo all'utente di indovinare il numero
let numberUser = Number(prompt("Indovina un numero tra 1 e 100"));

// Continua a chiedere finché l'utente non indovina il numero
while (numberUser !== numberRandom) {
    if (numberUser > numberRandom) {
        alert("Il numero è troppo alto!");
    } else if (numberUser < numberRandom) {
        alert("Il numero è troppo basso!");
    }

    // Chiedi all'utente di rreinserire il numero
    numberUser = Number(prompt("Prova un altro numero"));
}

// Quando l'utente indovina il numero, faglielo sapere
document.querySelector("#user").innerText += `Numero utente= ${numberUser}`;
document.querySelector("#random").innerText += `Numero random= ${numberRandom}`;
document.querySelector("#result").innerText = "Complimenti! Hai indovinato il numero!"
