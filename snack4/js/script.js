//PROGRAMMA STAMPA SOLO SE IL NUMERO E' PARI

// Crea un array per memorizzare i numeri pari inseriti
let evenNumbers = [];

// Inizia un ciclo infinito (sempre vero)
while (true) {
    // Chiedi all'utente di inserire un numero o "stop"
    let userNumber = prompt("Inserisci un numero o digita 'stop' per terminare");

    // Se l'utente digita "stop", interrompi il ciclo
    if (userNumber === "stop") {
        break;
    }

    // Converte l'input dell'utente in un numero
    let number = Number(userNumber);

    // Se il numero è pari, aggiungilo all'array
    if (number % 2 === 0) {
        evenNumbers.push(number);
        console.log(number);
    }
}

// Stampa tutti i numeri pari inseriti dall'utente
document.querySelector("#numbers").innerHTML = `Hai inserito i seguenti numeri pari:<br> ${evenNumbers.join(", ")}`;