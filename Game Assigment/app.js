let secretnum = 7;
let user = prompt("1 se 10 ke drmiyaan number choose kro! 'Best Of Luck :)'")

console.log("Tumhara guess", user)

if (user == secretnum) {
    console.log("Correct:)");
}

else if (user == secretnum - 1 || user == secretnum + 1) {
    console.log("Bs ak Step door ho ':('");
}
else if (user == secretnum - 2 || user == secretnum + 2) {
    console.log("Thora Sa aur try kro ':('");
}

else if (user > secretnum) {
    console.log("Thora kmmm try kro ':('");
}

else if (user < secretnum) {
    console.log("Thora Ziyada try kro ':('");
}
else {
    console("Pheli Fursaat me Nikaal      'loser :)'");
}