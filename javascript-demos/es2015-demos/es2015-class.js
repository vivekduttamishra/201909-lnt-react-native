
class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    //note missing function keyword
    toString(){
        return `Person{name=${this.name}\tage:${this.age}}\tcan vote: ${this.age>18}`;
    }

    eat(food){
        console.log(`${this.name} eats ${food}`);
    }

    show(){
        console.log(`${this}`);
    }

}

prabhat=new Person('Prabhat',40);
shivanshi=new Person('Shivanshi',13);

prabhat.show();
shivanshi.show();

prabhat.eat('lunch');
shivanshi.eat('lunch');



