
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
    while (a!=0)
    return sum;
}

let b = 12233;
let b1 = 73262;
let res3 = sumNumber2(b);
let res4 = sumNumber2(b1);

console.log(`2) sum of number 2 = ${res3}`);
console.log(`3) sum of number 3 = ${res4}`);

function sumNumber2(b) {
    let num = 0;
    let sumNotEven2 = 0;
    let sumEven2 = 0;
    let numberEven2 = 0;
    let numberNotEven2 = 0;
    if (b < 0) {
        b = (-b);
    } else if (b > 0) do {
        num = b % 10;
        if (num%2!=0) {
            sumNotEven2 = sumNotEven2 + num;
        } else {
            sumEven2 = sumEven2 + num;
        }
        b = (b - num) / 10;
    }
        while (b!=0)
    let result = (sumEven2!=sumNotEven2)?'Unlucky':'Lucky';
    return result;
}

let b2=561624;
let b3=266321;
let res5 = luckyNumber(b2);
let res6 = luckyNumber(b3);

console.log(`4) sum of lucky number 4 = ${res5}`);
console.log(`5) sum of lucky number 5 = ${res6}`);

function luckyNumber(b2) {
    let index = 1;
    let sumNotEven = 0;
    let sumEven = 0;
    if (b2 < 0)
    {
        b2 = -b2
    }
    while (b2>0)
    {
        if (index%2!=0) {
        sumNotEven = sumNotEven + b2%10;
    } else if (index%2===0){
        sumEven = sumEven + b2%10;
    }
        b2=(b2-b2%10)/10;
        index++;
    }
    let result = (sumEven != sumNotEven)? 'Unlucky' : 'Lucky';
    return result;
}