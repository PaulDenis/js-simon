var numbers = [];
var playerDigits = [];
// Un alert() espone 5 numeri generati casualmente.
// mi serve un ciclo che mi generi cinque numeri casuali e un alert che li stampi
do {
    var number = getRandomNum(1, 100);
    if (existInArray(number, numbers) == false) {
       numbers.push(number);
    } 
 } while (numbers.length < 5);
//  console.log(numbers);
alert("Ricorda questi numeri \n" + numbers)

// Da li parte un timer di 30 secondi.
var countDown = 30;

var clock = setInterval(function () {
  document.getElementById("timer").innerHTML = countDown;
  if (countDown == 0) {
    clearInterval(clock);
    } else {
        countDown --;
    }
}, 1000);
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

