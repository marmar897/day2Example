// alert("We are NOW using external JS");
// alert("Hello World");
/*
VARIABLES IN JS
AS OF ES6
2 WAYS OF CREATING VAIABLES 
AND ONE WASY TO CREAT A CONSTANT

original method for creating variables is to use var.
syntax 
var variableName;

declaring variables with let 
this was introduced in 2015 in ES6
let variablename;
*/
var num;
let num2;

//Assignment statement
num = 9;
num2 = 10;
//variable initialization statement
let total = num +num2;
const PI = 3.145;
let name1 = "John Doe"
console.log(num);

/*
Data Types in JS:
Primitive types
1.String"example of string". 
A string is sequence pf characters that are enclosed in single or double quotes.

2. Number, 12/Infinity/3.14
3. boolean -> true or false
4. null
5.undefined

Objects 


*/
let sum;
console.log(sum);

/* Type coercion:
the process of converting one data type into another. this can implicitly or explicity.
JSs is a weakly typed language
2+2 = 4
2+"2" = "22"
'2' + '2' = '22'
'2' - 0 +2
*/ 

/* Functions
a function is a block of code that is designed to preform a particular task
a function has a name and is executed with something invokes it
therea re 3 different ways to create a functions. 
1. function keyboard declaration.
2. function expression saved in a var
3. ES6 arrow functions

the function keyword declaration

*/
function test(){
    alert("Helloworld test function");
}
test();
function getSum(num1, num2){ 
    console.log(num1 +num2 )
}

// function getSum(num1, num2){ 
//     return num1 +num2 ;
// }
getSum(20,30);

/*function expressions saved in a variable 
a function can also be defined using an expression. 
a function expression can be stored into a variable. 
after a function has been stored intoa variable, the variable can be used as a function.


let variableName = function(parameters){ code to executed goes here};
variableName (arguments);

*/

let getTotal = function(a, b, c ){ return a +b+c};
let y = getTotal(1, 3, 12);
console.log(y);

let hello = () => {
    let carName = "toyota"; // this is a local variable 
    alert("Helloworld: " + carName);
}
//this gives an error becuse ur calling outside of local scope
//console.log("outside" + carName);
hello();

//Arrays 

let cunySchools = ["LC", "CCNY", "Hostos", "Hunter"];

console.log(cunySchools[0]);
console.log(cunySchools.length);

cunySchools[0] = "Lehman College";
console.log(cunySchools[0]);

console.log(cunySchools[cunySchools.length-1]);

//objects in JS
//const car = {make: "Toyota", model: "Matrix"}
const car = {
    make: "Toyota", 
    model: "Matrix"
};

/*sccessing data from objects
bracket notation 
objectName["key"]

dot notation
objectName.keyname

*/
//bracket notation
console.log(car['make']);
console.log(car['model']);

//dot notation
console.log(car.make);
console.log(car.model);

function firstFunction(){
    displayAlert("Hello 1");
}

function secondFunction(){
    displayAlert("Hello 2");
}
function displayAlert(text){
    alert(text);
}

firstFunction();
secondFunction();

function calculate(num1, num2, callBackFunction){
    var t = num1 + num2;
    callBackFunction(t);
}

calculate(1, 10, displayAlert);