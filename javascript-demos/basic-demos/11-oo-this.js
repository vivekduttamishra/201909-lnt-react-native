
function showPerson(){
      
    console.log('name',this.name);
    console.log('age',this.age);
    console.log();
}
var p1=new Object();
p1.name='Prabhat';
p1.age=35;
p1.show=showPerson;  //fucntion is also an object
p1.show(); //'p1' is automatically passed as 'this'


var name='global';
showPerson(); //this is window object / global context

