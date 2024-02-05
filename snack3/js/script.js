// PROGRAMMA DUE ARRAY CON GLI STESSI ELEMENTI

//creo due array di lenght diverse
const firstArray = ["Luca", "Pietro", "Filippo", "Marta", "Lucia"];
const secondArray = ["Marco", "Antonio", "Guido"];

//cerco quale dei due è più corto
let shortArray;
let longArray;

if (firstArray.length < secondArray.length) {
    shortArray = firstArray;
    longArray = secondArray;

} else {
    shortArray = secondArray;
    longArray = firstArray;
}

//aggiungo elementi finchè non hanno la stessa lunghezza
while (shortArray.length < longArray.length) {
    shortArray.push(prompt("Inserisci un nome"));
}

document.querySelector("#first").innerText = firstArray;
document.querySelector("#second").innerText = secondArray;