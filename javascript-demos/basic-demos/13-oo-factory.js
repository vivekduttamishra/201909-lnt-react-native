/* factory function
    * normal function
    * create object
    * set properties
    * return object
*/
var createPerson = function (name,age) {
    var person = new Object();
    person.name = name;
    person.age = age;
    person.toString = function () {
        return 'Person {name:' + this.name + ' , ' + 'age:' + this.age + '}';
    };
    person.show = function () {

        console.log(this.toString());
    };
    person.eat = function (food) {
        console.log(this.name + ' eats ' + food);
    };
    return person

}
var prabhat=createPerson('Prabhat', 35);

var shivanshi=createPerson('Shivanshi',13);

prabhat.eat('Lunch');
prabhat.show();

shivanshi.eat('Snacks');
shivanshi.show();

