// Question 1 ---> Declare an empty array

let studentname = []

console.log(studentname)


// Question 2 ---> Use another Method to Declare an empty array

let name = new Array()

console.log(name)

// Question 3 ---> Declare and initialize a strings array

let fruits = ["Banana", "Mango", "Apple", "Orange", "Grapes", "Pineapple"]

console.log(fruits)

// Question 4 Declare and initialize a numbers array

let number = ["43", "36", "89", "65", "76", "97"]

console.log(number)

// Question 5 Declare and initialize a boolean array

let boolean = [true, false, false, true]

console.log(boolean)

// Question 6 Declare and initialize a mixed array

let mix = ["String", 7, true]

console.log(mix)

// Question 7 Qualifications in Pakistan

let eduacionlevels = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]

console.log(eduacionlevels)

// quetion 8 Students + Scores + Percentages

let Students = ["Ali", "Sana", "Imran-Hashmi"]

let score = [320, 298, 450]

let totalmark = 500

let Percentage1 = (score[0] / totalmark) * 100
let Percentage2 = (score[1] / totalmark) * 100
let Percentage3 = (score[2] / totalmark) * 100

console.log(Students[0] + " " + "Scored" + " " + score[0] + " " + "Out Of" + " " + totalmark + " " + " " + Percentage1 + "%")
console.log(Students[1] + " " + "Scored" + " " + score[1] + " " + "Out Of" + " " + totalmark + " " + " " + Percentage2 + "%")
console.log(Students[2] + " " + "Scored" + " " + score[2] + " " + "Out Of" + " " + totalmark + " " + " " + Percentage3 + "%")

// Question 9 Colors array

let color = ["Red", "Green", "Blue"]

console.log("Normal Colors --->", color)

color.unshift("Yellow")

console.log("Unshit ka Use kr ke Start me Yellow Color add kr diya --->", color)

color.push("Black")

console.log("push Ka use kr ke End me Black color add kr diya --->", color)

color.push("white", "Purple")

console.log("Unshit ka Use kr ke Start  me 2 Colors add kr diya --->", color)

color.shift("white")

console.log("Shift ka use kr ke start ka color Remove kr diya --->", color)

color.pop("Black")

console.log("Pop ka use kr ke end ka color remove kr diya --->", color)

color.splice(2, 0, "Orange")

console.log("Splice Ka use kr ke index 2 me color add kr diya --->", color)

color.splice(1, 2)

console.log("Splice ka use krke index 1 or 2 se color remove kr diya --->", color)

// Question 10 Sort student scores

let mark = [320, 230, 480, 120]

console.log("Sort Krne se Phele --->", mark)

mark.sort()

console.log("sort krne ke baad -->", mark)


// Question 11 Copy cities array

let city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

console.log("Listed City --->", city)

let selectedcity = city.splice(1, 2)

console.log("selectedcity --->", city)

// Question 12 Join array into single string

let makeword = [" This is my cat"]

console.log("String me likhne ke baad -->", makeword)

// Question 13 FIFO (First In First Out)

let queue = []

queue.push("Ali")
queue.push("Sana")
queue.push("Bilal")

console.log("queue start --->", queue)

console.log("Removed first person -->", queue.pop());
console.log("Removed second person -->", queue.pop());
console.log("Removed Third person -->", queue.pop());

// Question 14 LIFO (Last In First Out)

let fruit = [];

fruit.push("Apple");
fruit.push("Banana");
fruit.push("Cherry");

console.log("Current fruits -->", fruit);

console.log("Removed:", fruit.pop());
console.log("Removed:", fruit.pop());
console.log("Removed:", fruit.pop());