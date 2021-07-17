import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";


let myShape = new Shape(10,5);
let myCircle = new Circle(10, 5, 3);
let myRectangle = new Rectangle(10,20,75,90);


// declare an array of shapes that will initially be empty
let theShapes: Shape[] = [];


// add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
}