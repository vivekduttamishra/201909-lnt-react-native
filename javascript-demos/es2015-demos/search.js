
let numbers=[2,3,9,11,36,15,4,12,23,29,17,35,72,73,97,58];
function isPrime(number){
    if (number<2) return false;
    for(let i = 2 ;i<number;i++)
        if(number%i==0)
            return false;

    return true;
}
function searchPrimes(numbers){
    let result=[];
    for (let number of numbers)
        if (isPrime(number))
            result.push(number)

    return result;
}
function searchOdds(numbers){
    let result=[];
    for(let number of numbers)
        if (number%2!=0)
            result.push(number);

    return result;
}

let primes=searchPrimes(numbers);
console.log('primes',primes);

let odds=searchOdds(numbers);
console.log('odds',odds);

function search(fnSelector,...numbers){
    if (numbers.length==1)
        numbers=numbers[0];

    let result=[];
    for(let number of numbers)
        if (fnSelector(number))
            result.push(number);

    return result;
}


function isEven(x) {
    return x%2==0;
}

let evens=search(isEven,numbers);
console.log('evens',evens);

function is_divisible_by_5(x){
    return x%5==0;
}

let result=search(is_divisible_by_5, 2,3,5,15,12,18,17,25,22,4,50,1);
console.log('result',result);


result= search(function (n){return n%3==0 && n%5==0; }, numbers)
console.log('result',result);
