
const primes = [2,3,5,7,11,13,17,19];
printArray(primes);
function printArray(primes) {
    console.log("1) PRINT ARRAY", primes.join(', ' ));
}

let array = [1,3,5,6,7,8,-9]
reverseArray(array);

function reverseArray(array) {
    let revArray=[];
    let counter = 0;
    for (let i=array.length-1; i>=0 ;i--){
        revArray[counter] = array[i];
        counter++;
    }
    console.log('2) Reversed array: ', revArray.join(', '));

}

let arr = [2,60,9,61,-5,0,4];
let arr1 = [2,60,9,61,0,4];
let index =-1;
let value = -5;
let value2 = 7;
index=search(arr, value);
console.log(`3) value ${value} on i = ${index}`);
index=search(arr1, value2);
console.log(`4) value ${value2} on i = ${index}`);

function search(arr, value) {
    let res = -1;
    for (let i=0; i<arr.length; i++) {
            if (value === arr[i]) {
            res = i;
            i=arr.length;
        }
    }
    return res;
}