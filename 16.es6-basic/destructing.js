//breaking down of complexstructures
//into parts
let arr=["Scot","Div","Ad"]
let [fName,,lName]=arr
console.log(fName)
console.log(lName)


//split()
let [firstName,lastName]="John Galt".split(' ')
console.log(firstName)
console.log(lastName)

let [fName1,title]=["Uma","Mahesh","Meka"]
console.log(title)

//object destructuring
let user = {name:'jJ',age:22}
for(let[key,value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
}

let options={
    title1:"DI",
    height:100,
    width:200
}
let {title1,width,height}=options
console.log(title1)
console.log(height)
console.log(width)