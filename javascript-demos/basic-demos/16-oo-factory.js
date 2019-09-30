/* constructor funciton
    * name should start with upper case
    * should attach all properties to 'this'
    * shouldn't return anything
*/

var Person = function (name,age) {
    //no new Object()
    this.name = name;
    this.age = age;
    this.toString = function () {
        return 'Person {name:' + this.name + ' , ' + 'age:' + this.age + '}';
    };
    this.show = function () {

        console.log(this.toString());
    };
    this.eat = function (food) {
        console.log(this.name + ' eats ' + food);
    };    
    //return this ---> no return 

}
// 1. create 'new' object
// 2. use it as 'this' in the function
// 3. return 'this' implicitly
var prabhat=new Person('Prabhat', 35); 
//prabhat is the 'new' object 
prabhat.eat('Lunch');
prabhat.show();

