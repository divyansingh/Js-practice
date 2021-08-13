function Student(fName,lName){
    this.firstName = fName;
    this.lastName=lName;
}

var student = new Student("div","Singh")
console.log(student)

student.city="delhi"
console.log(student)
