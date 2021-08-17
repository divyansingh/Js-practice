function say(message){
    console.log(message)
}
console.log(say())

function say1(message){
    message = typeof message !== 'undefined' ? message:"ho"
    console.log(message)
}
say1()

function sayHey(message="hi"){
    console.log(message)
}
// sayHey()
sayHey()
sayHey("I am a fine")
