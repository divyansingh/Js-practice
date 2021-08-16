var person = {
    firstName: "Divyansh",
    lastName: "Singh",
    city: "Delhi"
}
person.age = 22
person.firstName = "Div" //update
delete person.age //Delete
console.log(person) //Read

// object.eventExtension
//we can edit and delete but not add

var preventPerson = {
    firstName: "Divyansh",
    lastName: "Singh",
    city: "Delhi"
}
Object.preventExtensions(preventPerson)
preventPerson.age = 23; //add not possible
preventPerson.firstName = "Ved" //Update
delete preventPerson.city  //Delete
console.log(preventPerson) //Read

//object.seal
// delete not possible

var sealPerson = {
    firstName: "Divyansh",
    lastName: "Singh",
    city: "Delhi"
}
Object.seal(sealPerson)
sealPerson.age = 23; //add not possible
sealPerson.firstName = "Ved" //Update
delete sealPerson.city  //Delete not possible
console.log(sealPerson) //Read

//object.freeze
//add delete update not possible

var freezePerson = {
    firstName: "Divyansh",
    lastName: "Singh",
    city: "Delhi"
}
Object.freeze(freezePerson)
freezePerson.age = 23; //add not possible
freezePerson.firstName = "Ved" //Update not possible
delete freezePerson.city  //Delete not possible
console.log(freezePerson) //Read


var freezeobjectrwithinojject = {
    firstName: "Divyansh",
    lastName: "Singh",
    city: "Delhi",
    address: {
        state: "DD",
        country: "India"
    }
}
Object.preventExtensions(freezeobjectrwithinojject)
freezeobjectrwithinojject.age = 23; //add not possible
freezeobjectrwithinojject.firstName = "Ved" //Update
delete freezeobjectrwithinojject.city  //Delete
console.log(freezeobjectrwithinojject) //Read

// Object.freeze(freezeobjectrwithinojject.address)
freezeobjectrwithinojject.address.country = "Australia"
console.log(freezeobjectrwithinojject)