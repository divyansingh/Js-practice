// var Module=(function(){
//     var privateMethod=function(){
//         console.log("This is private Method")
//     }
//     return "div"
// })()
// //creating private methods which are not accesible to outside
// console.log(Module.privateMethod)

// var Module=(function(){
//     var publicMethod = function(){
//         return ("This is public Method")
//     }
//     return {
//         div:publicMethod
//     }
// })()
// //creating private methods which are not accesible to outside
// console.log(Module.publicMethod())

// var Module =(function(){
//     return {
//         publicMethod:function(){
//             return "this is public method"
//         }
//     }
// })()
// console.log(Module.publicMethod())
//locally scpoped opbject
var Module = (function () {
    //locally scoped objects
    var myObj = {}
    var privateMethod = function () {
        return "this is private method"
    }
    myObj.publicMehod = function () {
        return "thisi is publc mnthod"
    }
    return myObj;
})()
console.log(Module)
