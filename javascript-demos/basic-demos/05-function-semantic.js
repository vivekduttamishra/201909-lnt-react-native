
//A function semantic ---> sum is now a part of the window object/global context
function sum(x,y){
   return x+y;
}
//Another reference to a Function
var add=sum;  //add is also a reference in window/global context                            

//both function and its reference acts as function
console.log('sum(1,2)',sum(1,2));
console.log('add(1,2)',add(1,2));




//minus is assigned to less not to global context
//less=minus
//less will be available in global context. minus is not a part of global context
//minus will cease to exist here onward.
var less=function minus(x,y){
    return x-y;
}
console.log('less(10,2)',less(10,2));
console.log('minus(10,2)',minus(10,2));






