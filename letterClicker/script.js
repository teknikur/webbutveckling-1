var number = 0;

var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

addEventListener("keypress", plusOne(count))

function plusOne() {
    var count = document.getElementById('count');

    number++;
    count.textContent = number.toString();
    word.textContent = emptyString += alphabet[Math.floor(Math.random()*alphabet.length)];
}


console.log(emptyString);