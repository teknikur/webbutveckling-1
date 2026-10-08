var number = 0;
var incrementValue = 1;
function increment(){
    var count = document.getElementById('count');

    number++;

    count.textContent = number.toString()+"α";
}