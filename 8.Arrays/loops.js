var items=["laptop","Ipad","Chair"]
//1. using loop
for(var i=0;i<items.length;i++){
    console.log(items[i])
}
//2. using foreach loop
items.forEach(function(item){
    console.log(item)
})

//3. using map

items.map(function(item){
    console.log(item)
})

//4. using in of 
for(item in items){
    console.log(item)
}
for(items of items){
    console.log(item)
}