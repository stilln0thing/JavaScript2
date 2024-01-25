"use strict"; //treat all JS code as newer version

// alert(3+1) we are using node.js not browser

console.log(3+3);
console.log("Atharv")

let name = "Atharv"
let age = 19
let isLoggedIn = false
let state;

// number => 2^53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => uniqueness


// object 

console.log(typeof undefined); //undefined
console.log(typeof null); //object

//***********Datatypes */
// PRIMITIVE

// 7 Types :- String, Number , boolean, Null, Undefined, Symbol, BigInt


const score = false;
const scoreValue = 100.3;
const isLoggedin = false;
const outsideTemp = null;
let userEmail

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 4567212374893200574n

// REFERENCE(Non Primitive)

//Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "me"]
let myObj = {
    name : "atharv",
    age: 19,
}

const MyFunction = function(){
    console.log("Hello!")
}

console.log(typeof bigNumber)


//  *****************************************************************************************

// Stack(Primitive),  Heap(Non Primitive)

let myYoutubeName = "abcd";
let anotherName = myYoutubeName;
anotherName = "bcdse";
console.log(myYoutubeName)
console.log(anotherName);


