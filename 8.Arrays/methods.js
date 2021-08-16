//arr.push()   -last
// arr.unshift -begining
// arr.pop     -del from end
// arr.shift   -remove value form start

var arr=[1,2,3,4]
arr[4]=5
arr.push(6)
arr.push(7)
arr.unshift(0)
arr.unshift(-1)
arr.unshift(-2)
arr.pop()
arr.shift()
console.log(arr)