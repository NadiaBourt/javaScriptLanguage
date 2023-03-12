let library = [];
const form = document.getElementById('form');

    function Book (event) {
        event.preventDefault();
        const isbn = form.querySelector('[id = "isbn"]'),
            title = form.querySelector('[id="title"]'),
            author = form.querySelector('[id = "author"]'),
            year = form.querySelector('[id = "year"]')
    const values = {
         isbn: isbn.value,
         title: title.value,
         author: author.value,
        year: year.value
    };
        console.log('1', values);
    }
        form.addEventListener('submit', Book);


      // let res = Book(isbn,title,author,year);
       // library.push(Book);
     // console.log('library=', library);


//console.log(Book);

    // function findBook(library, isbn, title, author, year) {
    //     for (let i=0; i<library.length; i++){
    //         if ((library[i].isbn===isbn)||(library[i].title===title)
    //             ||(library[i].author===author)||(library[i].year===year)){
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    //
    //
