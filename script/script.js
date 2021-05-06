var numbers = [];
var playerDigits = [];
// Un alert() espone 5 numeri generati casualmente.

// mi serve un ciclo che mi generi cinque numeri casuali e un alert che li stampi
do {
    var number = getRandomNum(1, 100);
    if (existInArray(number, numbers) == false) {
       numbers.push(" " + number);
    } 
 } while (numbers.length < 5);
// console.log(numbers);
alert("Ricorda questi numeri \n" + numbers )

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
var correctAmmount = 0;
var correctNumbers = [];
setTimeout(function() {
    do {
        do {
            var digit = parseInt(prompt("Inserisci uno alla volta i numeri di prima:"));
        } while (isNaN(digit) || digit < 0 || digit > 100);
        if (!existInArray(digit, playerDigits)) {
            playerDigits.push(digit);
        }
    } while (playerDigits.length < 5) ;
    // console.log(playerDigits);

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    
    for (var i=0; i < numbers.length; i++) {
        for (y = 0; y < numbers.length; y++) {
            if (playerDigits[i] == numbers[y]) {
                correctNumbers.push(playerDigits[i]);
                correctAmmount++;
            }
        }
    }

    for (var i=0; i < numbers.length; i++) {
        document.getElementById("numbers").innerHTML += "<li>" + numbers[i] + "</li>"
        document.getElementById("player_digits").innerHTML += "<li>" + playerDigits[i] + "</li>"
    }

    document.getElementById("corrects").innerHTML = "Ti sei ricordato " + correctAmmount + " numer* \n " + correctNumbers;

}, 31000);


