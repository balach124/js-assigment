// Q 1

let firstname = prompt("Enter Your First Name")
let lastname = prompt("Enter Your Last Name")
let fullname = firstname + " " + lastname
console.log("Hello!", fullname);

// Q 2

let mobilename = prompt("What Your Favourite mobile")
let mobilelen = mobilename.length
console.log(mobilename, "Lenght of mobile -->", mobilelen);

// Q 3

let con = "Pakistan"
let index = con.indexOf("n")
console.log("index of n is ->", index);

// Q 4

let world = "hello world"
let hello = world.lastIndexOf("l")
console.log("last index of l is ->", hello);

// Q 5

let cont = "pakistani"
let ry = cont.charAt(3)
console.log("Character at 3rd index is ->", ry);

// Q 6

let flrstname = prompt("Enter Your First Name")
let iastname = prompt("Enter Your Last Name")
let name = flrstname + " ".concat(iastname)
console.log("Hello!", name);

// Q 7

let city = "Hyderabad";

let newcity = city.replace("Hyder", "Islam")

console.log("After replacement: " + newcity);

// Q 8

let message = "Ali and Sami are best friends. They play cricket and football together.";

let newMessage = message.replace(/and/g, "&");

console.log(newMessage);

// Q 9

let str = "427"

let num = Number(str);
console.log("Value: " + str + " (Type: " + typeof (str) + ")");
console.log("Value: " + num + " (Type: " + typeof (num) + ")");

// Q 10

let likh = "kuch likho"
let lik = likh.toUpperCase()
console.log(lik);

// Q 11 

let numi = 472;

let stri = numi.toString();

console.log("Value: " + stri + " (Type: " + typeof (str) + ")");

// Q 12

let iiname = prompt("Enter Your Username")

if (iiname.includes("@") || iiname.includes(".") || iiname.includes(",") || iiname.includes("!")) {
    alert("Please enter a valid username without special symbols [@ . , !]");
}
else {
    alert("Username accepted: " + iiname);
}