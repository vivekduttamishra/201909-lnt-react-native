
function showPerson(p){
    console.log('p.name',p.name);
    console.log('p.age',p.age);
    console.log();
}

//Object semantic 1
var p1=new Object() ; //create Object
p1.name='Prabhat';    //attach properties
p1.age=35;            //attach properties

showPerson(p1);

//Object semantic 2 ---> {}
var p2={} ; //same as new Object()
p2.name='Sanjay';    //attach properties
p2.age=45;            //attach properties

showPerson(p2);

//Java Script Object Notation (JSON)
var p3={
    name:'Shivanshi',  //note use of colon
    age: 13
};
showPerson(p3);

//Javascript Objects are internally dictionaries
var p4={}; //or new Object()
p4['name']='Shweta'; //p4.name='Shweta'
p4["age"]=40;

showPerson(p4);
console.log('p4.name',p4.name);
console.log('p4["name"]',p4["name"]);;






