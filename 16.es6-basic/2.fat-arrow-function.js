// fat arrow (=>) function
//not an alternative to to regular function just a shorter way of writing regular js function

// let add = function(x,y){
//     return x+y;
// }

// console.log(add(10,20))

let add = (x, y) => {
    return x + y;
}
console.log(add(10, 20))

let add1 = (x, y) => x + y;

console.log(add1(10, 20))

//if using block syntax return iss needed to be specified

let numbers=[4,2,6]
numbers.sort(function(a,b) {
    return b-a;
})
console.log(numbers )


let newNumbers=[4,2,6]
newNumbers.sort((a,b)=>b-a)
console.log(newNumbers)

//takes single parameter

let name=["john","Scott","Tuan"]
let length = name.map(function(name){
    return name.length
})
let length1 = name.map(name=>name.length)
console.log(length1)

//with no parameter

let logDocument=()=>    console.log(window.document)
logDocument()

//line break
let multiply =(x,y)=>x,y
console.log(multiply(5*7))

//object literal

// let setColor=function(color){
//     return {value:color}
// }
let setColor =color=>({value:color})
let backGroundColor =setColor("green")
console.log(backGroundColor)

//meaning of this
var employee={
    id:1,
    greet:function(){
        // var self=this
        setTimeout(()=>{console.log(this.id)},1000)
    }
}
employee.greet()

//whenever we use an arrow function it is not going to create its own  this so it would be refering to its parent 

// setTimeout(function(){
//     console.log("hello")
// },2000)
// setInterval(function(){
//     console.log("hello")
// },2)
employee.greet()













