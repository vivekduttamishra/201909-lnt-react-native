

let p1=new Point(3,4);

let origin=new Point(); //0,0

let p2=new Point3D(3,4,5);

console.log(`p1=${p1}`); //autocalls p1.toString()
console.log(`p2=${p2}`);
console.log(`origin=${origin}`);


console.log(`distance between ${p1} and ${origin} is ${p1.distance(origin)}`);