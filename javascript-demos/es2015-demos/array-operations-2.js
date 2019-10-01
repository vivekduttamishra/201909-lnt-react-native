
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

//get a list of all matching objects
books.forEach(b=>console.log(`${b.title} by ${b.author}`));

//convert object from one type to another

// b=> {} <---- means a multiline lambda function
//let quickInfo= books.map(b=> { name: b.title, writtenBy: b.author});

//solution: use explicit return statement to return json
//let quickInfo= books.map(b=>{ return { name: b.title, writtenBy: b.author}})

//solution2: put a () around json. now js knows we are returning ()
let quickInfo= books.map((b,i)=> ({id:i, name: b.title, writtenBy: b.author})  );
quickInfo.forEach( (info,index)=> console.log(index,info));






