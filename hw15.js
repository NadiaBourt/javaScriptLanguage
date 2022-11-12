//1
let array = [35, 0, -17, 18, -1];
function minMax (array) {
    return array.reduce((prevValue, currentValue) => {
        prevValue[0] = prevValue[0] < currentValue ? prevValue[0] : currentValue;
        prevValue[1] = prevValue[1] > currentValue ? prevValue[1] : currentValue;

        return prevValue;
}, [array[0], array[0]]);
}
console.log(`TASK 1. ARRAY before: ${array}; OUTPUT array [min,max]: ${minMax(array)}`);
//2
let arrayString = ["abc","old_abc","lmn","123","old_lmn","old_"];
let prefix = "old_";
let res;
function deleteWithPrefix(arrayString, prefix) {
    res = arrayString.filter(item => item.indexOf(prefix));
    return res;
}
console.log("TASK 2. ARRAY BEFORE ", arrayString, "ARRAY AFTER", deleteWithPrefix(arrayString, prefix));
//3
let inputArray = [1,6,3,8,5,2,7,4,9];
let array2 = inputArray.slice();
console.log(`TASK 3. Array before ${inputArray}`);

function getSortedEvenOdd (array2) {
    array2.sort((a, b) => a % 2 - b % 2 || a - b);


    return array2;
    }

getSortedEvenOdd (array2);
console.log("ARRAY AFTER", getSortedEvenOdd (array2));



