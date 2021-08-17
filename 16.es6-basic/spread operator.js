//es6 provided a new operator called spread operator 
//that consits of three dots (...)
// spread operator allows us to spread elenmts
// on an iterable object as an array or mmap
const odd=[1,3,5]
const combined=[2,4,5,...odd]
console.log(combined)

// ES6 also has three dots (...) which is rest parameter
function display(a,b,...arguments){
    console.log(arguments)
}
display(1,2,3,4,5)

// spread operator -unpacks elemts
// rest operator packs elemts into an array

//constructing array literal
let initialCharaters=['A','B']
let chars=[...initialCharaters,'C','D']
console.log(chars)

//concatinating two array
let num=[1,2]
let moreNum=[3,4,5,6]
let allNumbers=[...num,...moreNum]
console.log(allNumbers)


//copying an array
let scores =[80,70,90]
let copiedScored=[...scores]
console.log(copiedScored)


//spread operator and string

let newChars=['A',...'BC','D']
console.log(newChars)





