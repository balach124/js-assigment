// =======================
//      Q1 – Q7
// =======================

// Q1: Display current date & time

function ShowDateTime() {
    console.log("Q1 Output:", new Date());
}
ShowDateTime()

// Q2: Full Name Greet

function Greetuser(first, last) {
    console.log("Q2 Output:" + " Hello " + first + " " + last)
}
Greetuser("Meer", "Balach")

// Q3: Add Two Number

function addnumber(a, b) {
    return a + b;
}
console.log("Q3 Output:" + addnumber(5, 7))

// Q4: Calculator

function Calculator(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
    return "Invalid Operator"
}
console.log("Q4 Output:" , Calculator(5, 7, "/"));

// Q5: Square Argument

function square(n) {
    return n * n
}
console.log("Q5 Output:" , square(4))

// Q6: factorial of a number

function factorial(n){
    let result = 1
    for (let i = 1; i <= n ; i++){
        result *= i
    }
    return result
}
console.log("Q6 Output:" , factorial(5));

// Q7: Counting

function counting(start, end) {
for (let i = start; i <= end; i++) {
console.log("Q7 Output:" , i);
}
}
counting(1,20);

// END //
