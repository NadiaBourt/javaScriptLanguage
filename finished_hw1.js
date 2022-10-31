const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter your number  ', number => {
    console.log("number");
    readline.close();
    number = Math.abs(number);
    let sum =0;
        if (number<0) {
        number = -number;
    }
    sum = sumDigits(number);
    console.log("SUM Number", sum);
});


function sumDigits(number) {
    let sum = 0;
    let digit = 0;
    while (number != 0) {
        digit = Math.round(number % 10);
       sum = (sum + digit);
        number = ((number - digit) / 10);
    }
    return sum;
}
