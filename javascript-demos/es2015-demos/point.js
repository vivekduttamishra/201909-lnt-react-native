class Point{
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;

    }
    toString(){
        return `Point(${this.x},${this.y})`;
    }
    distance(p2){
        let dx= this.x-p2.x;
        let dy= this.y-p2.y;

        return Math.sqrt(dx*dx+dy*dy);
    }
}

class Point3d extends Point{
    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }

    toString(){
        return `Point(${this.x},${this.y},${this.z})`;
    }
}



let p1=new Point(3,4);

let origin=new Point(); //0,0

let p2=new Point3d(3,4,5);

console.log(`p1=${p1}`); //autocalls p1.toString()
console.log(`p2=${p2}`);
console.log(`origin=${origin}`);

//distance is Math.sqrt(dx*dx+dy*dy) where dx is the p1.x-p2.x and dy is p1.y-p2.y

console.log(`distance between ${p1} and ${origin} is ${p1.distance(origin)}`);

let o3=new Point3d();

console.log('o3',o3.toString());
