try {
    throw "Error Occured in try block"
}catch(ex){
    console.log(ex)
}
finally{
    console.log("this would always be executed")
}
try {
    throw {
        number:101,
        msg:"multiple students"
    }
}catch(div){
    console.log(div)
}
finally{
    console.log("this would always be executed")
}