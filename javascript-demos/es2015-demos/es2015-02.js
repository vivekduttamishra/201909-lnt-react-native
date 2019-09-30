//ES2015 Features -> default arguments
function plus(...numbers){ //ES2015 rest parameters

    let sum=0;  //ES2015 --> let/const instead of var
    for(let number of numbers)  //ES2015 - for-of looop
        sum+=number; 

    return sum;
}

console.log('plus(2,3)',plus(2,3));

console.log('plus(2)',plus(2));

console.log('plus()',plus());


