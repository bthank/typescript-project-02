import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myShape = new Shape(10,5);
console.log("Shape is: " + myShape.getInfo());

let myCircle = new Circle(10, 5, 3);
console.log("Circle is: " + myCircle.getInfo());

let myRectangle = new Rectangle(10,20,75,90);
console.log("Rectangle is: " + myRectangle.getInfo());