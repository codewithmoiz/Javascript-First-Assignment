// Task 2

var num1 = 7;
var num2 = 4;

var multiply = num1 * num2;
var divide = num1 / num2;

console.log(multiply);
console.log(divide);

// Task3

var number = window.prompt("Enter the Number");
var isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert("It's a prime number.");
} else {
    alert("It's not a prime number.");
}