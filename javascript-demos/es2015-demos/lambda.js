

let fn=function(...numbers){
    console.log('arguments',arguments);
    console.log('numbers',numbers);
};

let lambdaFn=(...numbers)=>{
    console.log('arguments',arguments);
    console.log('numbers',numbers);
};

fn(1,2,3,4);

lambdaFn(1,2,3,4);

