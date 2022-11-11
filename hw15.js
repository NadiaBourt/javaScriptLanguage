//1
let array = [35, 0, -17, 18, -1];
function minMax (array) {
    return array.reduce((prevValue, currentValue) => {
        prevValue[0] = prevValue[0] < currentValue ? prevValue[0] : currentValue;
        prevValue[1] = prevValue[1] > currentValue ? prevValue[1] : currentValue;
        console.log()
        return prevValue;
}, [array[0], array[0]]);
}
console.log(`ARRAY before: ${array}; OUTPUT array [min,max]: ${minMax(array)}`);
//2
let arrayString = ["abc","old_abc","lmn","123","old_lmn","old_"];
let prefix = "old_";
function deleteWithPrefix(arrayString, prefix) {
   // return arrayString.filter(element=>!element.)}



}