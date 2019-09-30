
function sum(x,y){
   return x+y;
}

console.log('sum(2,3)',sum(2,3));
console.log('typeof(sum)',typeof(sum));  //1. A function is an object of type 'function'


var add=sum;                            //2. A function can be referred by a reference
console.log('typeof(add)',typeof(add)); 
console.log('add(5,2)',add(5,2));       //3. reference too can act as function





