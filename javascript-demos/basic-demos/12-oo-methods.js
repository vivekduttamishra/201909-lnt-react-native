var p1=new Object();
p1.name='Prabhat';
p1.age=35;

p1.toString=function(){
    return 'Person {name:'+this.name+' , '+'age:'+this.age+'}';
}

p1.show=function(){
      
    console.log(this.toString());
};

p1.eat=function(food){
    console.log(this.name+' eats '+food);
}

p1.show();
p1.eat('Lunch');

