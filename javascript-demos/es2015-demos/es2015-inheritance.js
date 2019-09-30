
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

class Employee extends Person{
    constructor(id,name,age,salary){
        super(name,age); //pass these elements to base class constructor
        this.id=id;
        this.salary=salary
    }

    work(){
        console.log(`${this.name} works for salary ${this.salary}`);
    }
}


prabhat=new Employee(1,'Prabhat',40, 20000);
prabhat.show();
prabhat.eat('lunch');
prabhat.work();


