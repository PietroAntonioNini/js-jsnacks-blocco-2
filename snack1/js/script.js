//PROGGRAMMA SOMMA MINORE DI 50

//Creo un array
const numbers = [];

//Salvo la variabile numero inserito dall'utente
let number;

//Salvo la variabile somma
let sum = 0;

//Creo un ciclo che si attiva finche la varibile somma è minore di 50
while (sum < 50) {
    number = Number(prompt("Inserisci un numero"));

    if (sum + number < 50) {
        sum += number;
        numbers.push(number);

    } else {
        break;
    }

    console.log(sum);
}

document.querySelector("#Number").innerText = numbers;
document.querySelector("#Sum").innerText = sum;