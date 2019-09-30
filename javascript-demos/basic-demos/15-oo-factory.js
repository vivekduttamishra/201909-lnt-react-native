var createPerson = function (name,age) {
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

var prabhat=createPerson('Prabhat', 35); //what is this here: window/global
//create person returns undefined. ---> prabhat is undefined
prabhat.eat('Lunch');
prabhat.show();

