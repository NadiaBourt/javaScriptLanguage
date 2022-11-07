console.log(checkTZ("321983769"));
console.log(generateRandomTZ());
console.log(checkTZ("01234789877"));

function checkTZ(array) {
    let arrayString = Array.from(array);
    let result = 0;
    let rem = 0;
    let evenOrOdd = arrayString.map(function(digit, index){
        if ((index % 2!= 0) && (digit*2 < 10)) {
            result = digit * 2;
        }
        else if ((index%2!= 0) && (digit*2>= 10)){
            result = 0;
            rem = 0;
            digit = digit * 2;
            while (digit != 0) {
                rem = digit % 10;
                result = result + rem;
                digit = Math.trunc(digit / 10);
            }}
        else {
            result = digit * 1;
        }
        return result;
    })
    let sumDigits = evenOrOdd.reduce(function(res, cur){
        return res + cur;
    })
    return sumDigits%10 == 0 ? true : false;
}
function generateRandomTZ() {
    let str = "";
    let count = 0;
    while (count !=8) {
        str = str + Math.round(Math.random()*9);
        count++;
    }
    let arStr = Array.from(str);
    let res = 0;
    let rem = 0;
    let evenOrOdd = arStr.map(function(digit, index){
        if ((index % 2 != 0) && (digit * 2 <10)) {
            res = digit * 2;
        }
        else if ((index % 2 != 0) && (digit * 2 >= 10)){
            res = 0;
            rem = 0;
            digit = digit * 2;
            while (digit != 0) {
                rem = digit % 10;
                res = res + rem;
                digit = Math.trunc(digit / 10);
            }}
        else {
            res = digit * 1;
        }
        return res;
    })
    let sumDigits = evenOrOdd.reduce(function(res, cur){
        return res + cur;
    })
    function lastDigit () {
        let digit = 0;
        while ((sumDigits + digit) % 10 != 0) {
            digit++;
        }
        return digit;
    }
    return str + lastDigit();
}
