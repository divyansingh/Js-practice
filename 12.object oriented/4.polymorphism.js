function Shape(){

}
Shape.prototype.draw= function (){
    return "Generic shape"
}

function Circle(){

}
Circle.prototype =Object.create(Shape.prototype)//polymorphism
Circle.prototype.draw=function(){
    return "I am circle"
}
function Square(){

}
Square.prototype =Object.create(Shape.prototype)//polymorphism
Square.prototype.draw=function(){
    return "I am square"
}

function Triangle(){

}
Triangle.prototype =Object.create(Shape.prototype)//polymorphism
// Triangle.prototype.draw=function(){
//     return "I am trinagle"
// }
 
// var shape1=new Shape()
// var shape2=new Circle()
// var shape3=new Square()
// var shape4=new Triangle()

var shapes=[new Shape(),new Circle(),new Square(),new Triangle()]
shapes.forEach(function(shape){
    console.log(shape.draw())
})
// console.log(shape1.draw())
// console.log(shape2.draw())
// console.log(shape3.draw())
// console.log(shape4.draw())


