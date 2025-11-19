// Q 1

let date = new Date ()
console.log(date)

// Q 2

let months = [
  "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
];

let currentMonthIndex = new Date().getMonth();
let currentMonthName = months[currentMonthIndex];

alert(currentMonthName);

// Q 3

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDayIndex = new Date().getDay(); 
let currentDayShort = days[currentDayIndex];

alert(currentDayShort);

// Q 4 

let today = new Date().getDay(); 

if (today === 0 || today === 6) {
    alert("It's Fun day");
} else {
    alert("It's not Fun day");
}

// Q 5 

let age = prompt("Enter your age:");

let currentYear = new Date().getFullYear();

let birthYear = currentYear - age;

alert("Your birth year is: " + birthYear);

// Q 6 

let hour = new Date().getHours();
if(hour < 12){
    alert("Its AM");
} else {
    alert("Its PM");
}
