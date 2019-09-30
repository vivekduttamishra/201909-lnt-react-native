
class Book{
    constructor(title,author,rating,price){
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
    }

    toString(){
        return `${this.price}\t${this.rating}\t${this.title}\t${this.author}`;
    }
}

class BookStore{
    
    constructor(){
        this.books=[];
    }

    getAll(){
        return this.books;
    }

    getByTitle(title){
        for(let book of books)
            if(book.title===title)
                return book;

        return null;
    }

    addBook(book){
        this.books.push(book);
    }
}


function getDummyBookStore(){
    let store=new BookStore();
    store.addBook(new Book('The Count of Monte Cristo','Alexandre Dumas',4.8,250));
    store.addBook(new Book('The Brethren','John Grisham',4.1,320));
    store.addBook(new Book('Sons of Fortune','Jeffrey Archer',4.3,350));
    store.addBook(new Book('Rashmirathi','Ramdhari Singh Dinkar',4.9,120));
    store.addBook(new Book('Kane and Abel','Jeffrey Archer',4.5,280));
    store.addBook(new Book('Kurukshetra','Ramdhari Singh Dinkar',4.6,170));

    return store;
}


function printBooks(header,books){
    console.log(header);
    console.log('Price\tRating\tTitle\t\tAuthor')
    for(let book of books){
        console.log(`${book}`);
    }
    console.log('---');
}


//---------- main program begins here

let store=getDummyBookStore();
let books=store.getAll();
printBooks('All books', store.getAll());

function search(fnSelector,...numbers){
    if (numbers.length==1)
        numbers=numbers[0];

    let result=[];
    for(let number of numbers)
        if (fnSelector(number))
            result.push(number);

    return result;
}

//let isDinkarBooks=function(book){ return book.author==='Ramdhari Singh Dinkar'};

//lambda functions
//let isDinkarBooks=(book)=>{ return book.author==='Ramdhari Singh Dinkar'};

//lambda expression
let isDinkarBooks=  book =>  book.author==='Ramdhari Singh Dinkar';

let dinkarBooks= search(isDinkarBooks, books);
printBooks('Dinkar Books', dinkarBooks);


//function style 
function bookBetween100And200(book){
    return book.price>=100 && book.price<200;
}
//anonymous style
const priceRange100And200= function (book){
    return book.price>=100 && book.price<200;
}

const range100And200= book => book.price>=100 && book.price<200;

let result=search(range100And200, books);

printBooks('priced 100-200',result);


let highRated= search(b=> b.rating>4.5, books);
printBooks('High Rated',highRated);