//ES2015 Features -> default arguments
function plus(x=0,y=x){
    return x+y;
}

console.log('plus(2,3)',plus(2,3));

console.log('plus(2)',plus(2));

console.log('plus()',plus());


