
function sum(x,y){
    //console.log('arguments',arguments);
    //every javascript function contains an array of arguments
    //including every argument passed
    //x and y are optional
    var sum=0;
    for(var i=0;i<arguments.length;i++)
        sum+=arguments[i]
    
    return sum
}

console.log('sum(2,3)',sum(2,3));
console.log('sum("hello","world")',sum("hello","world"));

console.log('sum(1,2,3,4,5,6,7,8,9,10)',sum(1,2,3,4,5,6,7,8,9,10));
console.log('sum(1)',sum(1));
console.log('sum()',sum());


