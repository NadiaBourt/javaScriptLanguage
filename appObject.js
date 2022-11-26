let id;
let name;
let birthYear;
let salary;
let nEmployees = 20;
let emlArr = [];// = [eml1, eml2, eml3, eml4, eml5, eml6, eml7, eml4, eml8, eml9, eml10];

function createEmployee(id, name, birthYear, salary)
{
    return {id, name, birthYear, salary};
}

function getRandomNumber(min, max)
{
    let number = Math.round(min - 0.5 + Math.random() * (max - min - 1));
    return number;
}

function getId(iDigits)
{
    let min = Math.pow(10, iDigits - 1)
    let max = Math.pow(10, iDigits)
    let id = getRandomNumber(min, max);
    return id;
}
function getRandomName()
{
    let number = getRandomNumber(65,90);
    return number;
}
//console.log("name", getRandomName())


function fabricationMethod(nEmployees)
{
    for(let i = 0;  i<nEmployees; i++)
    {
        id = getId(4);
        name = String.fromCharCode(getRandomName()) + id;
        birthYear = getRandomNumber(1970,1997); //get birth Year;
        salary = getRandomNumber(4000, 25000);
        emlArr[i] = createEmployee(id, name, birthYear, salary);
    }
    return emlArr;
}

console.log(`Array of employees `,fabricationMethod(nEmployees));

let newArray = emlArr.slice()
//console.log(`new array`, newArray)

let currentValue = 0;
function sum(newArray) {
    let initialValue1 = 0;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();//2022
    let sumAge = newArray.reduce(function (accumulator, currentValue) {
        return accumulator + (currentYear-currentValue.birthYear);
    }, initialValue1)
    return sumAge}
console.log("Average = ", sum(newArray)/nEmployees)
