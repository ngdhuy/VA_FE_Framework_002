// ES6 ~ ES7
'use strict'

console.clear()

let a = 10
let b = a + 10
console.log(`${a} + ${b} = `, a + b)

//? Function in ES

function Sum(a, b) {
    return a + b 
}

let c = Sum(a, b)
console.log("c = ", c)

// anonymous function
const minute = function(a, b) {
    return a - b
}

c = minute(a, b)
console.log("c = ", c)

// ES7 -> Arrow function
const mul = (a, b) => a * b

c = mul(b, c)
console.log("c = ", c)

const div = (a, b) => {
    let c = a / b
    return c
}

console.log("25 / 5 = ", div(25, 5))