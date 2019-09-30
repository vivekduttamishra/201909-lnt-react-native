
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
    console.log('header');
    console.log('Price\tRating\tTitle\t\tAuthor')
    for(let book of books){
        console.log(`${book}`);
    }
    console.log('---');
}


//---------- main program begins here

let store=getDummyBookStore();

printBooks('All books', store.getAll());

