try{
    var output=getMsg("hi")
}catch (ex){
    console.log(ex)
}
finally{
    console.log("this would always be executed")
}

try{
    var output="Helo div"
}catch (ex){
    console.log(ex)
}
finally{
    console.log("this would always be executed")
}