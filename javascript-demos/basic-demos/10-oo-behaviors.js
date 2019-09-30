
function showPerson(p){
    console.log('p.name',p.name);
    console.log('p.age',p.age);
    console.log();
}
var p1=new Object();
p1.name='Prabhat';
p1.age=35;
p1.show=showPerson;  //fucntion is also an object
//p1.show(); //we havent passed 'p'

p1.show(p1);