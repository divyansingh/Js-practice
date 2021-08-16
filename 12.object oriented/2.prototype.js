function Student(fName, lName) {
    this.firstName = fName
    this.lastName = lName
    // this.getFullName=function(){
    //     return this.firstName+" "+this.lastName
    // }
}
Student.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}
Student.prototype.city="BOston"
var student1 = new Student("DIV", "singh")
console.log(student1)
var student2 = new Student("DIV1", "singh")
console.log(student2)
var student3 = new Student("DIV2", "singh")
student3.city="Sydney"
console.log(student3)