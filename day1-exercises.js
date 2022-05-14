//1-Write a single line comment which says, comments can make code readable

//Comments can make code readable

//2-Write another single comment which says, Welcome to 30DaysOfJavaScript

// Welcome to 30DaysOfJavaScript

//3-Write a multiline comment which says, comments can make code readable, easy to reuse and informative

/*
Comments can make code readable, easy to reuse and informative
*/

//4-Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

let str = "Emre";
let bool = true;
let und = undefined;
let nll = null;

//5-Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

console.log(typeof str, typeof bool, typeof und, typeof nll);

//6- Declare four variables without assigning values

let one, two, three, four;

//7-Declare four variables with assigned values

let fullName = "Emre TUFAN";
let howOld = 22;
let isMarried = false;
let nationally = "Turkish";

//8-Declare variables to store your first name, last name, marital status, country and age in multiple lines

//I did it in the previous exercise :)

//9-Declare variables to store your first name, last name, marital status, country and age in a single line

//prettier-ignore
let firstName = "Emre",lastName = "TUFAN",marialStatus = false,country = "Turkey",age = 22;

//10-Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

let myAge = 22,
  yourAge = 40,
  sentence = `I am ${myAge} years old.
You are ${yourAge} years old.`;

console.log(sentence);
