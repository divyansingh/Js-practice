var person1 = {
    firstName: "Div",
    lastName: "Singh"
}

var person2 = {
    firstName: "Divyansh",
    lastName: "Si"
}

function getName(message, city) {
    return message + " to " + city + " " + this.firstName + " " +
        this.lastName

}

var callName = getName.bind(person1)

var fullNameUsingBind = callName("Welcome", "Hyderabad")
console.log(fullNameUsingBind)

var fullNameUsingCall = getName.call(person2, "AAO", "Dilli")
console.log(fullNameUsingCall)

var fullNameUsingApply = getName.apply(person2, ["Wel", "lucknow"])
console.log(fullNameUsingApply)

console.log(getName.bind(person1)("hi", "hello"))
