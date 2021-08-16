function greet(message){
    return function(name){
        
        console.log(message+" " +name)
        
    }
}
// var output=greet();
// console.log(output)

var getMessage =greet("welcome");
console.log(getMessage)
var sayhello= getMessage("DIv")