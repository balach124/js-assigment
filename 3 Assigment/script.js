// Question no 1
    document.write("<h2>Question no 1</h2>");
    var number = 10;
    document.write("the value of ++ number is " + (++number) + "<br>");
    document.write("the value of -- number is " + (--number) + "<br><br>");

    // Question no 2
    document.write("<h2>Question no 2</h2>");
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    document.write("this value is equal to " + result + "<br><br>");

    // Question no 3
    document.write("<h2>Question no 3</h2>");
    var userName = prompt("Enter your name", "balach");
    document.write("Hello " + userName + " Welcome<br><br>");

    // Question no 4
    document.write("<h2>Question no 4</h2>");
    var tableNum = prompt("Enter Table Number", 5);
    for (var i = 1; i <= 10; i++) {
      document.write(tableNum + " X " + i + " = " + (tableNum * i) + "<br>");
    }