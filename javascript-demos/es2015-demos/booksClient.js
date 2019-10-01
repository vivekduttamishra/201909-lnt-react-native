
import {getDummyBookStore,Book} from './books_api';

let store=getDummyBookStore();

//return a list of all titles, prices and rating of book by dinkar

store.getAll()
        .filter( b=> b.author.indexOf('Dinkar')>=0) //returns an array
        .map(b=>({title:b.title, prices:b.price, rating:b.rating}))
        .forEach(b=>console.log(b));



