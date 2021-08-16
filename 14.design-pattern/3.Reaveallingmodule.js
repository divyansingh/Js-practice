var Module=(function(){
    var privateMethod=function(){
        return "this is private method"
    }
    var somMethod=function(){
        return "this is some method"
    }
    var publicMehod=function(){
            return "this is public method"
    }
    var anotherMethod=function(){
        return "this is another method"
    }
    return{
        method1:somMethod,
        method2:publicMehod
    }
})()
console.log(Module)
var Module = (function(){
    var privateMethod=function(message){
        return message
    }
    var publicMehod=function(text){
       return privateMethod(text)
    }
    return{
        publicMethod:publicMehod
    }
})()
console.log(Module.publicMethod("please call private "))