//
// const number = 5623;
// let sum = 0;
//
// console.log(" Output 1 = ", getDigitsSum(number));
// let example = "9000/(10+20)**2";
// let ex2 = "9+100/2";
// console.log("Output 2 = ", oPa(example));
// console.log("Output 3 = ", oPa(ex2));
//
//
// function oPa(example) {
//     return new Function('return ' + example)();
// }
//
// function getDigitsSum(number) {
//     if (number < 0) {
//         number = Math.trunc(Math.abs(number));
//     }
//     do {
//         let digits = 0;
//         digits = Math.round(number % 10);
//         sum = (sum + digits);
//         number = ((number - digits) / 10);
//     } while (number != 0)
//     return sum;
// }
//
// function printAnanas() {
//     const resultAN = ("A" + + "A" + "AS").toLowerCase();
//     console.log(resultAN);
// }
// printAnanas();
// let num1 = 123.45;
// let num2 = -280.123;
// let num3 = 123;
// let num4 = -123;
//
// console.log(" Output reverse 1 = ", calling (num1));
// console.log(" Output reverse 2 = ", calling (num2));
// console.log(" Output reverse 3 = ", calling (num3));
// console.log(" Output reverse 4 = ", calling (num4));
//
//
//
// function calling(num) {
//     let res = num < 0? "-" : "";
//     if (num<0)
//     {
//         num = Math.abs(num)
//     }
//     num = Math.trunc(num);
//     do {
//         let digit = num % 10;
//         res =  res + digit;
//         num = Math.trunc(num / 10);
//     }
//     while (num != 0)
//     return res;
// }

function myParseInt (string, base){
base = base || 10;
let result = 0;
for (let i = 0; i<string.length; i++){
    result = result * base + getCode(string[i]);
}
return result;
}

function getCode (symbol){
symbol = symbol.toLowerCase();
const codeA = 'a'.charCodeAt;
const res = symbol<= '9'? +symbol:symbol.charCodeAt-codeA+10;
return res;
}
let str1 = 'Java';
let num = 16;
console.log("output=", myParseInt(str1, num));