const circle = require("./circle");
console.log(circle.calcArea(10));
console.log(circle.calcCircumference(10));
console.log(circle.calcDiameter(10));

const rectangle = require("./rectangle");
console.log(rectangle.calcArea(10,20));
console.log(rectangle.calcPerimeter(10,20));

const triangle = require("./triangle");
console.log(triangle.isEquilateral(10,20,30));
console.log(triangle.calcPerimeter(20,20,30));