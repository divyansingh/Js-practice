var person1 = new Object()
var person2 = {}
var person3 = Object.create(null)
console.log(person1)
console.log(person2)
console.log(person3)



var person = new Object();

person["firstName"] = "Scott"
// person["firstName"]="DIV"
person["lastName"] = "Desn"

console.log(person)

var emailProperty = "email"
person[emailProperty] = "Scott@ef.com"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["emailName"])
person["address"] = new Object()
person["address"]["state"] = "Masachusetts"
person["address"]["city"] = ""
person["address"]["country"] = "USA"