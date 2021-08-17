//use bckticks(`)

let simple =`this is a template literal`
let str =`template literal on ES6`
console.log(str)
console.log(str.length)
console.log(typeof str)


//using single quote '
let anotherString=`Here's a template literal`
console.log(anotherString)

//string contain backtick `
let strWuthBacktick =`template \` instead of quptes '`
console.log(strWuthBacktick)

//Multiline strings pror to es6
let msg='Multiple \n string'
console.log(msg)

let msgWithText=
`
            this is 
      can span multiple lines
                :)
`
console.log(msgWithText)

 //variable and expression substitutions
 let firstName="Sc\"ott",
  lastName="Dstnack"
let greeting=`Hi ${firstName} ${lastName}` 
console.log(greeting)


