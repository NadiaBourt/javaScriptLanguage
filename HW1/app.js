const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter your number  ', number => {
   console.log("number");
    number = Math.round(number);
   if (number<0) {
       number = -number;
   }
       sumDigits(number);
    readline.close();
   });


function sumDigits(number) {
    let digit = 0;
    let sum = 0;
            while (number != 0) {
                digit = number % 10;
                sum = (sum + digit);
                number = ((number - digit) / 10);
            }
            console.log("SUM Number", sum);
           }
