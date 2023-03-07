let library = [];

pushButton.onclick = addBook;
showButton.onclick = showLibrary;

//let inputData = prompt("Enter book data separate by';'");

 //           while (inputData){
   //         const arr = inputData.split(';');
    //    if (findBook(library,arr[0])===-1){
    //          const book = new Book (arr[0], arr[1], arr[2], arr[3]);
     //         library.push(book);
     //    }
     //            inputData = prompt("Enter book data separate by';'");
     //    }

    // console.log(typeof library);
    // console.log(library);
    //
    // function printLibrary(library) {
    //     for (let i=0; i<library.length; i++){
    //         console.log(library[i].toString());
    //     }
    // }
    // function findBook(library, isbn) {
    //     for (let i=0; i<library.length; i++){
    //         if (library[i].isbn===isbn){
    //             return i;
    //         }
    //         }
    //     return -1;
    // }
function addBook(){

    console.log('function addBook');
    let isbn = document.getElementById("isbn").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;

    //console.log("isbn =", isbn, "title=", title);
    let book = Book(isbn,title, author, year);
    //console.log("library.toString() 1", library.toString());
    library.push(book.toString());

    // console.log("Book.title=", book.title);

     //console.log("library.toString() 2", library[0].toString());
     //console.log("library.toString() 2", library[1].toString());
    // console.log("library[0]", library[0]);
    // console.log("library[0]", library[0].toString());
    //console.log('Book.toString', book.toString());
}
function Book (isbn,title,author,year) {
        this.isbn = +isbn;
        this.title = title;
        this.author = author;
        this.year = +year;
       // console.log('this.author=', this.author);
        this.toString = function (){
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of: ${this.year}`;
    }
   // console.log('this.toString', this.toString());
    return this;
}
function showLibrary(){
    console.log("showLibrary");
    console.log("library.length = ", library.length);
    // const p = document.createElement('p');
    // const text=document.createTextNode('');
    // p.appendChild(text);
    // document.body.appendChild(p);
    const p = document.createElement('p');
    let text ='';
    for (let i=0; i<library.length; i++){
        console.log('i = ', i);
        //console.log('library[i].value = ', library.toString());
        console.log('p =  ', p);
        text=document.createTextNode(library[i]);
        p.appendChild(text);
    }
        console.log('text =  ', text);
        document.body.appendChild(p);


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
// function addBook (library, newObject){
// let arrayNew = library;
// while((newObject.isbn !=false)||(newObject.isbn!==library.isbn)) {
//    arrayNew = library[length - 1].push(newObject);
// }
// return arrayNew;
// }
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
// function findBook (library, arr){
// if(library[i]===arr[i]){
//     return -1;
// }
// else{
//     addBook();
// }
// }
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
