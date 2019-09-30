
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

}

let primes=searchPrimes(numbers);
console.log('primes',primes);

let odds=searchOdds(numbers);
console.log('odds',odds);


