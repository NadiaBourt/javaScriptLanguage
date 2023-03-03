const arr = [9,4,7,-1,6,0,3,5,0];
printArray(arr);
printArray(bubbleSort(arr));
function printArray(x){
    console.log("output", x);
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j] - arr[j + 1]>0) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

const obj={};
const peter=
    {
    firstName: 'Peter',
    lastName: 'Box',
    age: 19
    }
    // console.log(peter);
const person = [
    new Person (2345, 'Calvin', 'Klein', 94),
    new Person (3000, 'Mary', 'Johnson', 33),
    new Person (2000, 'Michael', 'Jordan', 32),
    new Person (3002, 'Noa', 'Cohen', 45),
    new Person (4021, 'Lars', 'Von Trier', 66)]
peter.id = 247455;

for (const key in new Person){
    console.log(peter[key]);
}
// console.log(peter.id);
// console.log(peter.firstName);

function Person (id, firstName, lastName, age) {
    this.id = +id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;

    this.fullName = function () {

        return `${this.firstName} ${this.lastName} ${this.id} ${this.age}`;

    }
}
console.log(person);

// printObject(peter);
// function printObject(obj){
//     for (let key in obj){
//         if (typeof obj[key]==='function'){
//             console.log(`${key} -> ${obj[key]}`);
//         }
//         else {
//             console.log(`${key} -> ${obj[key]}`)
//         }
//     }
// }
sorting(person);
function sorting(person) {
    const newPerson = person.sort((prev, next) => prev.age - next.age);
    console.log('NEW SORTING BY AGE =', newPerson);
}


const person2 = [
    new Person (2345, 'Tod', 'Klein', 94),
    new Person (3000, 'Mars', 'Johnson', 33),
    new Person (2000, 'Michael', 'Jordan', 32),
    new Person (3002, 'Noi', 'Cohen', 45),
    new Person (4021, 'Lars', 'Von Trier', 66)]

const out = bubbleSortByAGE(person2);
function bubbleSortByAGE(person2){
    debugger;
    for (let i = 0; i < person2.length-1; i++) {
    for (let j = 0; j < person2.length-1-i; j++) {
        if ((person2[j].age - person2[j + 1].age>0)) {
            let tmp = person2[j];
            person2[j] = person2[j + 1];
            person2[j + 1] = tmp;
        }
    }
}
return person2;
}
console.log(person2);
