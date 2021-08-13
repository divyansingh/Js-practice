// var person ={} //object literal syntax

var person = {
    fisrtName: "Adam",
    lastName: "Colson",
    email: "adam#ef.com",
    address: {
        state: "new SW",
        city: "Sydney",
        Country: "Australia"
    },
    getFullName: function () {
        return this.firstName + " " + this.lastName
    }
}
console.log(person)
console.log(person.fisrtName)
console.log(person.address.Country)