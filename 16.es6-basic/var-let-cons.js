//var-function scoped
function sample(){
    var variable="hello"
}
sample()
// console.log(variable)//will throw error

// var functionscoped
//let can reasigned
//const can not be reasigend
//let and const - block scoped

if(true){
    var foo="hi"
    let bar="who?"
    const baz="fine."
}

console.log(foo)
// console.log(bar)  //reference error
// console.log(baz) //reference error


// for(var i=0;i<3;i++){
//     console.log(i)
// }
// console.log(i)

// for(let i=0;i<3;i++){
//     console.log(i)
// }
// console.log(i)

function sample1(){
    let foo =1;
    foo=100
    console.log(foo)
    // let foo=0//error foo declared already
    var a=9
    var a=90//var can be declared again
}

sample1()



const myBoolean=true
if(myBoolean){
    const users=["as","admin","tr"]
    // users=users.concat("div")
}