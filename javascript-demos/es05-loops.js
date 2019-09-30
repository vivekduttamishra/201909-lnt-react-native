

var values=[2,3,5,2,6];


//using for loop
for(var i=0;i<values.length;i++)
    console.log('values['+i+']='+values[i])

//use for-in loop

for(var x in values)  //x is index and not value
    console.log(x, values[x]);


//for-in with object
var person={
    name:'Vivek Dutta Mishra',
    email:'vivek@conceptarchitect.in',
    phone:'9036084835'
};

for(var x in person)  // x returns 'fields or keys' of the object
    console.log(x, person[x]); // p.x --> p['x']