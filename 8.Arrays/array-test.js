var data = [
    1, "DIv", true, undefined, null, function (name) {
        return name
    },
    { name: "Divyansh" },
    ["1", "2", "3"]
]
console.log(data)

var temp = data[5]
var name = data[6].name
console.log(temp(name));

console.log(data[5](data[6].name))
console.log(data[6].name + " like " + data[7][1])