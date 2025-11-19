let ramadan = new Date("2026-02-19")

let today = new Date()

let diff = ramadan - today

let day = Math.floor(diff/ (1000 * 60 * 60 * 24))

let week = Math.floor(day / 7)
let remainingday = day % 7

let month = Math.floor(day / 30)
let remainingmonth = day % 30

console.log("Remainig Time In Ramadan")
console.log(day + " days")
console.log(week + " weeks " + remainingday + " days")
console.log(month + " month " + remainingmonth + " days")
