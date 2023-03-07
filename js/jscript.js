let library = [];
const arrLength = prompt("Enter number of books");
        for (let i=0; i<+arrLength; i++) {      //for enter number
        let inputData = prompt('Enter book data separate by ";"');
        let arr = inputData.split(';');
        const person = {
            isbn: +arr[0],  //number
            title: arr[1].trim(),   //string
            author: arr[2].trim(),  //string
            year: +arr[3],   //number
                }
             library.push(person);
         }
    console.log(typeof library);
    console.log(library);
    
    function findBook(library, isbn) {
        for (let i=0; i<library.length; i++){
            if (library[i].isbn===i){
                return i;
            }
            }
        return -1;
    }

function book (isbn,title,author,year) {
    this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
    this.toSorting = function (){
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of: ${this.year}`;
    }
}
//
// console.log(arr);
// console.log(typeof arr);
// let res = arr.splice(0,0).join('');
// console.log(res);
// library = library.push(arr);
// console.log(library);
//
//
//
//




// arr.forEach(item=>{
//     console.log(item);
// })






//for (let index = 0; index<arr.length; index++){


    //  object[index] = arr[index];

 //   let output = this.toString = function () {
  //  return `ISBN: ${this.}, Title: ${this.title}, AUTHOR: ${this.author}, Year of publishing: ${this.year}`;
 //    console.log(output);
//}
//console.log(object);

    //
// //

//console.log(inputData);
// console.log(arr);
// for (let i=0; i<library.length; i++){
//     library.push(arr);
// }
// console.log('out=', library);
// console.log(library.length);
//
//
// //const objectConstr =  newObj (isbn, title, author, year);
// //
// // function newObj(isbn, title, author, year) {
// //         this.isbn = isbn,
// //         this.title = title,
// //         this.author = author,
// //         this.year = year
// // }
// // console.log(newObj());
// //     let output = this.toString = function () {
// //         return `ISBN: ${this.isbn}, Title: ${this.title}, AUTHOR: ${this.author}, Year of publishing: ${this.year}`;
// //         console.log(output);
// //     }
// //     console.log(typeof newObj);
// //     console.log(newObj);
// //
// // for (const key in arr)
// // {
// //     console.log(`$[key]->${arr[key]}`)
// // }
// // //book(arr);
// // //addBook();
// //
// // //function addBook (library, newObject){
// // //let arrayNew = library;
// // //while((newObject.isbn !=false)||(newObject.isbn!==library.isbn)) {
// // //    arrayNew = library[length - 1].push(newObject);
// // //}
// // //return arrayNew;
// // //}
// //
// //
// // // function book (isbn, title, author, year){
// // //     this.isbn = +isbn;
// // //     this.title = title;
// // //     this.author = author;
// // //     this.year = +year;
// // //    let output = this.toString = function () {
// // //         return `ISBN: ${this.isbn}, Title: ${this.title}, AUTHOR: ${this.author}, Year of publishing: ${this.year}`;
// // //     console.log(output);
// // //     }
// // // }
// // // function findBook (library, arr){
// // // if(library[i]===arr[i]){
// // //     return -1;
// // // }
// // // else{
// // //     addBook();
// // // }
// // // }
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // // alert('hello');
// // // const check = confirm('Are you older than 18?');
// // // alert(check);
// // // const nickName = prompt("What's your name?");
// // // alert(nickName);
// // // console.log(typeof alert);
