
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your number  ', number => {
    let digit = 0;
    let sum = 0;
    console.log("number");
    while (number > 0) {
        digit = Math.round(number % 10);
        sum = (sum + digit);
        number = ((number - digit) / 10);
    }

    console.log("SUM Number", sum);
    readline.close();
});