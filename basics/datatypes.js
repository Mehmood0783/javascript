"use strict"; // treat all JS code as newer version of js.
// alert("Akmal"); // It will not work in Node.js

// console.log("Akmal") console.log("Bajwa") // Read Ability 

// Data Types
// Number
// String = ""
//  Boolean => true/false
// Symbol => unique
// null => type object
// undefined => undefined
// object

/*.......... Data Type Conversions ............*/

let score = "30";
let score2 = "30abc";
let score3 = undefined;
let score4 = null;
console.log(typeof score);

let valueInNumber = Number(score); // it convert string into num 
let valueInNumber1 = Number(score2); // it convert string into NAN
let valueInNumber2 = Number(score3); // it converts undefined into
let valueInNumber3 = Number(score4);

// console.log(valueInNumber,valueInNumber1,valueInNumber2,valueInNumber3);
// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber1);
// console.log(typeof valueInNumber2);
// console.log(typeof valueInNumber3);

let valueInBoolean = Boolean(score);
// console.log(valueInBoolean);

// "" => false
// "akmal" => true
// 215 => true
// 0 => false

// we also can convert any datatype in string

let num = null;
let stringValue = String(num);
// console.log(stringValue);
// console.log(typeof stringValue);
