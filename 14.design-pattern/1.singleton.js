//PROBLEM MULTIPLE INSTACE MORE MORE MEMORY
// function Student(){
//     console.log("Instance created")
// }
// var student1 =new Student()
// var student2 =new Student()
// var student3 =new Student()
// var student4 =new Student()
// var student5 =new Student()

var Singleton = (function(){
  
 var instance=null
 var createInstance = function(){
     var obj = Object.create(null)
         console.log("Obj has been created")
         return obj;
     }
     var getInstance =function(){
         if(!instance){
             instance=createInstance();
         }
         return instance;
     }
     return {
         getMyInstance:getInstance
     }
})()
var singleton1 =Singleton.getMyInstance()
console.log(singleton1)
var singleton2 =Singleton.getMyInstance()
console.log(singleton2)

var singleton3 =Singleton.getMyInstance()
console.log(singleton3)
// var singleton1 =new Singleton()
