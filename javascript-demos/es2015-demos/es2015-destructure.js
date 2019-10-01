

const values=[2,3,9,8,4];

//what if I need first two values in a variable

//traditional approach
//let v1=values[0];
//let v2=values[1];

//ES2015 approach
let [v1,v2]=values;
console.log('v1',v1);
console.log('v2',v2);


//What if we need first and 4th value

let [v0,,,v3] = values; //skip second and third

console.log('v0',v0);
console.log('v3',v3);

//object destructuring
let p={ name: 'Prabhat', email:'prabhat@gmail.com', phone:'90393939', address:{street:'MG Road',city:'Bangalore'}};


let {name,phone}=p; //get name and phone from p

console.log('name',name);
console.log('phone',phone);

