// 1
let strings = ["abc", "1mn", "cd"];
console.log("1. ", strings);

console.log("<ul>")
strings.forEach(function ulSurround (element){
    console.log(`<li>${element}</li>`);
})
console.log("</ul>");
//2//
let strings2 = ["abc","lmn","cd","abc","abc"];
console.log("2. ARRAY STRINGS = ", strings2);

    console.log("ab =", count(strings2, "abc"));
    console.log("abc =", count(strings2, "ab"));
    function count(strings2, sample)
    {
    return strings2.reduce(function count(count, element){
        return element===sample? count = count+1: count;
    }, 0);
    }
//3//

let ars = [1,2,3,4,5,6,7];
let arD = [10,20,30,40,50,60,70];
let arsCopy1 = ars.slice();
let arDCopy2 = arD.slice();
let change1 = arsCopy1.slice(3,6);
let change2 = arDCopy2.slice(0,4);
let change3 = arDCopy2.slice(4,7);
const array1 = change2;
const array2 = change1;
const array3 = change3;
const arS = array1.concat(array2, array3);
console.log("3. OUTPUT ARRAY =", arS);
console.log("arrD:", arD);
//4//
let numbers1= [1,2,3,4,5,6,7,8,9,10];
console.log("4. ARRAY 1", numbers1);
let numbers2 = [1,2,3,4,5,6,7,8,9];
console.log("ARRAY 2", numbers2);
  move(numbers1,4,-2);
  move(numbers2,2,5);
console.log("After 1",numbers1);
console.log("AFTER 2",numbers2);
  function move(array, index, offset)
{
    array.splice(index+offset,0, array.splice(index,1)[0]);
}


