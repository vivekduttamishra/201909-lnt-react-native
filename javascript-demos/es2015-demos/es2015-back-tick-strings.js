

let values=[2,3,5,2,6];

for(let ndx in values)
   // console.log('values['+ndx+']='+values[ndx]);
   console.log(`values[${ndx}]=${values[ndx]}`);

var person={
    name:'Vivek Dutta Mishra',
    email:'vivek@conceptarchitect.in',
    phone:'9036084835'
};


let message=`
Name = ${person.name.toUpperCase()}
Email= ${person.email}
Phone= ${person.phone}
`;

console.log(message)

