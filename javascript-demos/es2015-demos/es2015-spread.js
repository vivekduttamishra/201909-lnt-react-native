

let evens=[2,4,6,8];
let odds=[1,3,5,7];

//... spreads the value here

let all1=[evens,odds];

console.log('all1',all1);


let all2=[...evens, ...odds];

console.log('all2',all2);


let prabhat={name:'Prabhat',email:'prabhat@gmail.com'};

console.log('person',prabhat);

//how to make an employee with all details for person + additional details
//traditional approach
let empPrabhat={
                //copy existing value
                name:prabhat.name, 
                email:prabhat.email,
                //add new value
                company:'Adobe', 
                salary:'200000'
            };

console.log('empPrabhat',empPrabhat);

//es2015 approach

let emp2={
    //copy existing value
    ...prabhat,
    //add new value
    company:'Adobe', 
    salary:'200000'
};

console.log('emp2',emp2);

