// constants
const author = 'nitin';

// rest parameters
function abc(a, b, ...c){
    console.log(a,b,c);
}

// abc(1,2,3,4,5,6,7,8);

var arr = [1,2,3,4,5];
// spread
function spread(arr){
    console.log(...arr)
    // console.log(1,2,3,4,5)
    
}
var mysecarray = [1,2,3, ...arr];
var myob = {name: 'nitin', marks: 234}
// console.log(...myob)
spread(arr)

// destructuring

var first = arr[0];
var second = arr[1];

var [f,,,t] = arr;
// console.log(f, t);

// arrow functions

var arrFunction = param => 'param';

var returnedValue = arrFunction('hello');

// scope

// string interpolation or multi-line strings
var str = `
    multi
    line
    strings
`

// string interpolation
console.log(`first elemnt is: ${f} fourth element is: ${t}`)

// property shorthand
var myObject = {f, t}

var firstel = [1,2,3,4];
var secel = "hello";

var myobj = {
    firstel, secel
}