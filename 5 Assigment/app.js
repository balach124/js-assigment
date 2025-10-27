let pin = 1234;
let enterpin = prompt("Enter Your Pin")
let atmMoney = 50000;
let salary = 25000;
let withdraw = 20000;
if (enterpin == pin) {
    console.log("PIN correct. Now you can proceed.");
    if (withdraw <= 0) {
        console.log("Enter A Valid Amount");
    }

    else if (withdraw > salary) {
        console.log("Not enough money (Your Bank Balance is 25,000)");
    }

    else if (withdraw > atmMoney) {
        console.log("Not enough money in atm");
    }
    else {
        atmMoney = atmMoney - withdraw
        console.log("Withdrawal successful!");
        console.log(withdraw);
        console.log("ATM Machine Now Remaining -->", atmMoney)
    }
}
else {
    console.log("Wrong Pin");
}