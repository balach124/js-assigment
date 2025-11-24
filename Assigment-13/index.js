// =======================
//      Q1 – Q5
// =======================

// Q1

function factorial(a, b) {
    let result = 1
    for (let i = 1; i <= b; i++) {
        result *= a
    }
    return result
}
console.log("Q1 Output:", factorial(5, 2));

// Q2: Leap year

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log("Q2:Output", isLeapYear(2020))
console.log("Q2:Output", isLeapYear(2023))
console.log("Q2:Output", isLeapYear(2000))
console.log("Q2:Output", isLeapYear(1999))

// Q3: Custom indexOf function for a single character

function indexof(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i
        }
    }
    return -1
}
console.log("Q3:Output", indexof("Hello", "o"))


// Q4: Find Note

function note(hundread) {
    let amount = hundread * 100;
    let n100 = Math.floor(amount / 100)
    amount = amount % 100
    let n50 = Math.floor(amount / 50)
    amount = amount % 50
    let n10 = Math.floor(amount / 10)
    amount = amount % 10

    console.log("100 Rs notes: " + n100);
    console.log("50 Rs notes: " + n50);
    console.log("10 Rs notes: " + n10);
}
note(9)


// Q5: Remove Vowel 

function removeVowels() {
    let sent = "hello world";
    let vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < sent.length; i++) {
        let char = sent[i].toLowerCase()
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    console.log(result)
}
removeVowels()
