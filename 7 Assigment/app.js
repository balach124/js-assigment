// Q 1 Multidimensional Empty Array

let a = [
    [],
    [],
    []
]
console.log(a);

// Q 2  Declare and initialize a multidimensional array representing the following 

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix);

// Q 3 Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
    document.write(i);
    console.log(i);
}

// Q 4  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

let number = prompt("Select Number of which table you want")

let length = prompt("how much lenght you want in table")

for (let i = 1; i <= length; i++) {
    console.log(number + "X" + i + "=" + number * i);
}

// Q 5 Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruit=["Apple","Mango","Orange","Stawberry","Banana"]

for (let i = 0 ; i < fruit.length ; i++) {
    console.log(fruit[i])
}

// Q 6 Generate the following series in your browser. See example output.

for (n = 1 ; n <= 10 ; n++) {
    console.log(n);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Q 10 Write a program to print multiples of 5 ranging 1 to 100.

for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}