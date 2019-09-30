
let numbers=[2,3,9,11,36,15,4,12,23,29,17,35,72,73,97,58];
function search(fnSelector,...numbers){
    if (numbers.length==1)
        numbers=numbers[0];

    let result=[];
    for(let number of numbers)
        if (fnSelector(number))
            result.push(number);

    return result;
}


let evens= search( n=> n%2==0 , numbers);
console.log('evens',evens);

class DivisiblityChecker{
    constructor( divisor){
        this.divisor=divisor;

        this.check=this.check.bind(this); //bind check with this
    }

    check(number){
        return number%this.divisor==0;
    }
}

let d5=new DivisiblityChecker(5);
console.log('d5.check(20)',d5.check(20));
console.log('d5.check(29)',d5.check(29));

let selector=d5.check; //you got check binded with d5

//selector is called with d5 (because of apply above)
//this becomes global
let result= search( selector , numbers );
console.log('result',result);













