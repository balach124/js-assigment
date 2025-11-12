// Q1
let user = prompt("Enter A Postive integer")

// A
console.log("number", user)

// B
console.log("Round Off", Math.round(user))

// C
console.log("Floor Value", Math.floor(user))

// D
console.log("Ceil Value", Math.ceil(user))

// Q 2
let userr = prompt("Enter A Negative Floating Point")

// A
console.log("number", userr)

// B
console.log("Round Off", Math.round(userr))

// C
console.log("Floor Value", Math.floor(userr))

// D
console.log("Ceil Value", Math.ceil(userr))

// Q 3
let num = prompt("Enter A Number")

let value = Math.abs(num)
console.log("The Absolut Value Of" + " " + num + " " + "is" + " " + value)

// Q 4
let dice = Math.floor(Math.random(2) * 6) + 1
console.log("Dice Value", dice)

// Q 5
let toss = Math.random()
if (toss < 0.5) {
    console.log("Coin Value: Heads")
}
else {
    console.log("Coin Value: Tails");
}

// Q 6
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100: " + randomNumber)

// Q 7
let secretNum = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Guess the secret number (between 1 and 10):")
if (userGuess === secretNum) {
    console.log("Congratulations! You guessed the secret number: " + secretNum)
} else {
    console.log("Sorry! The secret number was " + secretNum)
}