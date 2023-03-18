const array = ['one', 'two', 'three', 'eight', 'three', 'six', 'three'];
let res = array.indexOf('three');
console.log(res);
res=array.findIndex(predicateLength3);
console.log(res);
function predicateLength3(s,i){
return i>=2 && s.length===3;
}
const person =[
    {
        name: 'Peter',
        surname: 'Fox',
        age: 73
    },
    {
        name: 'Ivan',
        surname: 'Bond',
        age: 33
    },
    {
        name: 'Mary',
        surname: 'Smith',
        age: 25
    },
    {
        name: 'Vova',
        surname: 'Top',
        age: 75
    }
    ]

res2=person.findIndex((p, i)=> i>0 && p.age>60);
console.log(res2);
//function predicateLength3(person){
 //   return person.age>=23;
//}

res3 = person.forEach((p, i)=> console.log(`${i+1}) ${p.name}, age: ${p.age} `));

console.log('==================');
res4 = [];
person.forEach(p=>{
    if (p.age<55){
        res4.push(p);
    }});
console.log(res4);
console.log('=========filter=========');

res4=person.filter(person=>person.age<60);
console.log(res4);

console.log('========map==========');
res4 = person.map( (p, i)=> `${i+1}) ${p.name}, age: ${p.age} `);
console.log(res4);
console.log('========map createTextNode==========');

let result = person.map( (p, i)=> document.createTextNode(`${i+1}) ${p.name}, age: ${p.age} `));
console.log(result);

console.log('========map paragraph==========');
let resultP = person.map( (p, i)=> {
    const a = document.createElement('p');
    a.append(document.createTextNode(`${i + 1}) ${p.name}, age: ${p.age} `));
    return a;
});
console.log(resultP);
console.log('========map create p==========');
resultP.forEach(p=> document.body.appendChild(p));
console.log('=================');

person.filter(p=> p.age<50)
    .map( (p, i)=> `${i+1}) ${p.name}, age: ${p.age} `)
    .map(s=>document.createTextNode(s))
    .map(t=>{
        const p = document.createElement('p');
        p.appendChild(t);
        return p;
    })
console.log("--------summ reduce-------");
const number = [2,7,1,6,9,-1,6,3,44,10,-56];
let r = 0;
r= number.reduce((accum, item)=>accum + item, 0);
console.log("result =", r);

console.log("--------* reduce-------");
let r2 = 1;
r2 = number.reduce((acc, it) => acc*it, 1);
console.log("result * = ", r2);

console.log("--------concat reduce-------");
let rc = number.reduce((n, i) => n + i, 'Concat = ');
console.log(rc);
let resAge = person.reduce((accum, p) => accum+p.age, 0)/person.length;
console.log("summ of average age = ", resAge);

console.log("-------------");

console.log("-------sort------");

number.sort((a, b)=> b-a); //3; 2;1;-1
console.log('Sorting numbers =', number);
console.log("-------sorting persons------");
person.sort((a,b)=>a.age-b.age);
console.log('Sorting persons by age =', person);

