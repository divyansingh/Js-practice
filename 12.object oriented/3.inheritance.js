function Person(fname, lName) {
    this.firstName = fname
    this.lastName = lName
    // this.gender = "M"

}
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}
var student = new Student()
console.log(Student.prototype)
console.log(student.prototype)
console.log(student.__proto__)


console.log(typeof student.__proto__)
console.log(typeof Student.prototype)

function Student(age) {
    this.age = age
}

Student.prototype = new Person("di", "xxi")
Student.prototype.getAge = function () {
    return this.age
}

var student1 = new Student(22);
console.log(student1)
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.age)

console.log(student1.getFullName())
console.log(student1.getAge())



