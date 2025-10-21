// question 1

var city = prompt ("Enter Your City Name");

if (city === "karachi") {
    alert("Welcome To City Of Light");
}



// question 2


let gender = prompt ("Enter Your Gender (Male/Female)")

if (gender === "male"){
    alert("Good-Morning Sir")
}

if (gender === "female"){
    alert("Good-Morning Madam")
}

// question 3

let color = prompt ("Enter traffic signal color (Red, Yellow, Green)")

if (color === "red"){
    alert("Must Stop")
}

if (color === "yellow"){
    alert("Ready To Move")
}

if (color === "green") {
    alert("Go Now")
}


// question 4


let fuel = prompt ("Enter Remaining Fuel")

if (fuel<0.25){
    alert("Please refill the fuel in your car")
}

else if (fuel<5){
    alert("Your Car Have Enough Fuel To Go")
}


// question 5

let a=4

if (++a === 5){
    alert("given condition for variable a is true")
}

let b=82

if (a++ === 83){
    alert("given condition for variable b is true")
}


var c = 12;

if (c++ === 13) {
  alert("condition 1 is true");
}

if (c === 13) {
  alert("condition 2 is true");
}

if (++c < 14) {
  alert("condition 3 is true");
}

if (c === 14) {
  alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The Cost Equals")
}

if (true) {
  alert("True");
}

if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}


// question 6

var sub1 = +prompt("Enter marks obtained in Subject 1:");
var sub2 = +prompt("Enter marks obtained in Subject 2:");
var sub3 = +prompt("Enter marks obtained in Subject 3:");
var totalMarks = +prompt("Enter total marks:");

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}
else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
}
else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
}
else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");


// question 7

var secret = 5;
var guess = +prompt ("Guess the secret number (1 to 10)")

if (guess === secret) {
    alert("Bingo! Correct Answer")
}
else if (guess + 1 === secret) {
    alert ("Close Enough to the correct answer")
}
else{
    alert("Try Again!")
}


// question 8


var num = +prompt("Enter a number")

if (num % 3 === 0) {
  alert("The number is divisible by 3")
}
else {
  alert("The number is not divisible by 3")
}


// question 9

var num = +prompt("Enter A Number")

if (num % 2 === 0){
    alert("The Number is Even")
}

else {
    alert("The Number is odd")
}


// question 10


var T = +prompt("Enter the temperature:")

if (T > 40) {
  alert("It is too hot outside.")
}
else if (T > 30) {
  alert("The Weather today is Normal.")
}
else if (T > 20) {
  alert("Today’s Weather is cool.")
}
else if (T > 10) {
  alert("OMG! Today’s weather is so Cool.")
}


// question 11

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var op = prompt("Enter operation (+, -, *, /, %)")

var result;

if (op === "+") {
  result = num1 + num2
}
if (op === "-") {
  result = num1 - num2
}
if (op === "*") {
  result = num1 * num2
}
if (op === "/") {
  result = num1 / num2
}
if (op === "%") {
  result = num1 % num2
}

alert("Result: " + result)
