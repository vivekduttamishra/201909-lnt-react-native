
var createPerson = function (name,age) {

    return {
        name:name,
        age:age,
        toString:function () {
            return 'Person {name:' + this.name + ' , ' + 'age:' + this.age + '}';
        },
        eat:function (food) {
            console.log(this.name + ' eats ' + food);
        },
        show:function () {
 
            console.log(this.toString());
        }
    }
}

var prabhat=createPerson('Prabhat', 35);

var shivanshi=createPerson('Shivanshi',13);

prabhat.eat('Lunch');
prabhat.show();

shivanshi.eat('Snacks');
shivanshi.show();

