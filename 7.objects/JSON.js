var obj={name:"Divi",city:"Delhi"}
var JAONObject={"name":"Divi","city":"Delhi"}
console.log(JAONObject)

var person={"name":"Divi","city":"Delhi"}
var jsonStringify= JSON.stringify(person)
console.log(jsonStringify,typeof jsonStringify)

var jsonParser = JSON.parse(jsonStringify)
console.log(jsonParser,typeof jsonParser)