

function plus(x,y){return x+y;}
function minus(x,y){return x-y;}
function multiply(x,y){return x*y;}
function divide(x,y){return x/y;}
function mod(x,y){return x%y;}

export default plus;
export const Minus=minus;
export const Multiply=multiply;
export const Divide=divide;

//mod is never exported

console.log('math.js executed');
