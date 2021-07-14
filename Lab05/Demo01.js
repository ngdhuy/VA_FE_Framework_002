// ECMA Script

console.clear();

const a = 10; 
console.log("const a = ", a);

var b = 100;
let c = 88;

if (b % 2 == 0) {
    console.log("=> b = ", b);
    console.log("=> c = ", c);
    b = 20; 
    c = 20;

    var d = 99;        // global variable
    let e = 88;        // local variable
    console.log("=> d = ", d);
    console.log("=> e = ", e);
}

console.log("b = ", b);
console.log("c = ", c);
console.log("=> d = ", d);
// console.log("=> e = ", e);