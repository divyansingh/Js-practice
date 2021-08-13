// Immediately invoked function -IIF

(function (message) {
    // console.log("Hello")
    console.log(message)
})('Welcome to IIFs');
// wishMe()


var getMesage = (function (message) {
    // console.log("Hello")
    return message
})('Welcome to IIFs');
console.log(getMesage);

// (var foo="foo")    statement
// exprssion
(10 > 91);
(alert("hi"));
