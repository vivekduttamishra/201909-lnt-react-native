

const Counter=function(value=0){

    this.value=value;

    this.increment=function(delta=1){
        //this.value ---> refers to Counter value. increment is part of this
        return incr(delta);
    }

    const incr=function(delta){
        //'this' is not Counter object. 'incr' is not part 'this' Counter
        //this refers to invoking object. and there is no invoking object
        this.value+=delta; //this is global not Counter
        return this.value;
    }

    const decr= delta=> {
        //A lambda function. doesn't have its own this. It uses outer this
        //here this refers to Counter object
        //no invoking object with outer scope Counter function scope
        this.value-=delta;
        return this.value;
    }

    this.decrement=function(delta=1){
        return decr(delta);
    }

}

let c=new Counter(5);

console.log('c.increment(2)',c.increment(2));

console.log('c.decrement(2)',c.decrement(2));




