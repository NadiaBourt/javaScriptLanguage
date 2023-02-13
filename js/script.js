
let a = 12348;
let res2 = sumNumber(a);
console.log(`1) sum of number = ${res2}`);

function sumNumber(a) {
    let sum = 0;
    let number = 0;
    if (a<0){
        a=(-a);
    }
    else if (a>0)
    do {
        number = a % 10;
        sum = number + sum;
        a = (a-number) / 10;
       }
    while (a != 0)
    return sum;
}

let b = 12233;
let b1 = 73262;
let res3 = sumNumber2(b);
let res4 = sumNumber2(b1);
console.log(`2) sum of number 2 = ${res3}`);
console.log(`3) sum of number 3 = ${res4}`);


function sumNumber2(b) {
    let number2 = 0;
    let sumNotEven = 0;
    let sumEven = 0;
    let numberEven = 0;
    let numberNotEven = 0;
    if (b < 0) {
        b = (-b);
    } else if (b > 0) do {
        number2 = b % 10;
        if (number2%2!=0) {
            sumNotEven = sumNotEven + number2;
        } else {
            sumEven = sumEven + number2;
        }
        b = (b - number2) / 10;
    }
        while (b != 0)
    let result = (sumEven!=sumNotEven)?'Unlucky':'Lucky';
    return result;
}