//  ************ EXERCISE: LEVEL 1 ************

//1-Declare an empty array;
const emptyArray = [];
//2-Declare an array with more than 5 number of elements
let numberArray = [1, 2, 3, 4, 5];
//3-Find the length of your array
console.log(numberArray.length);
//4-Get the first item, the middle item and the last item of the array
let firstItem = numberArray[0];
let lastItem = numberArray[numberArray.length - 1];
let middleItem = numberArray[(numberArray.length - 1) / 2];
console.log(firstItem, lastItem, middleItem);
//5-Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["Emre", "TUFAN", 22, false, "Turkey", "Konya"];
//6-Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//7-Print the array using console.log()
console.log(itCompanies);
//8-Print the number of companies in the array
console.log(itCompanies.length);
//9-Print the first company, middle and last company
console.log(
  `First Company: ${itCompanies[0]}
Middle Company: ${itCompanies[(itCompanies.length - 1) / 2]}
Last Company: ${itCompanies[itCompanies.length - 1]}`
);

//10-Print out each company
itCompanies.map((e) => {
  console.log(e);
});
//Alternative way
// itCompanies.forEach((e) => {
//   console.log(e);
// });

//11-Change each company name to uppercase one by one and print them out
itCompanies.map((e) => {
  e = e.toUpperCase();
  console.log(e);
});

//12-Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//prettier-ignore
let sentence = `${itCompanies.slice(0,-1).join(",")} and ${itCompanies.slice(-1)} are big IT companies.`
console.log(sentence);

//13-Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("Samsung");
index === -1
  ? console.log("Company not found in this array")
  : console.log(itCompanies[index]);

//14-Filter out companies which have more than one 'o' without the filter method
let doubleO = [];
itCompanies.forEach((e) => {
  e.includes("oo") ? doubleO.push(e) : e;
});
console.log(doubleO);

//15-Sort the array using sort() method
console.log(itCompanies.sort());

//16-Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17-Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

//18-Slice out the last 3 companies from the array
index = itCompanies.length - 3;
console.log(itCompanies.slice(index, itCompanies.length));

//19-Slice out the middle IT company or companies from the array
let middleIndex = (itCompanies.length - 1) / 2;
console.log(itCompanies.slice(middleIndex, middleIndex + 1));

//20-Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

//21-Remove the middle IT company or companies from the array
itCompanies.splice(middleIndex, 1);
console.log(itCompanies);

//22-Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//23-Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

//  ************ EXERCISE: LEVEL 2 ************

//1-We can use export const array = [...,...,...] and then we can import in this file but I don't want to do this here because of the layout
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
//2-First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let regex = /[.,]/g;
text = text.replace(regex, "");
let textArray = text.split(" ");
console.log(textArray.length);

//3-In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//3.1
shoppingCart.indexOf("Meat") === -1
  ? shoppingCart.unshift("Meat")
  : shoppingCart;
console.log(shoppingCart);
//3.2
shoppingCart.indexOf("Sugar") === -1
  ? shoppingCart.push("Sugar")
  : shoppingCart;
console.log(shoppingCart);
//3.3
allergicToHoney = true;
let indexOfHoney = shoppingCart.indexOf("Honey");
if (allergicToHoney) {
  shoppingCart.splice(indexOfHoney, 1);
}
console.log(shoppingCart);
//3.4
indexOfTea = shoppingCart.indexOf("Tea");
shoppingCart[indexOfTea] = "Green Tea";
console.log(shoppingCart);

//4-In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.indexOf("Ethiopia") === -1
  ? countries.push("Ethiopia")
  : console.log(countries[countries.indexOf("Ethiopia")].toUpperCase());
//5-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf("Sass") === -1) {
  webTechs.push("Sass");
  console.log(webTechs);
} else {
  console.log("Sass is a CSS preprocess");
}
//6-Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//  ************ EXERCISE: LEVEL 3 ************

//1-The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//1.1
ages.sort();
console.log(
  `The min value is: ${ages[0]} and the max value is: ${ages[ages.length - 1]}`
);
let min = ages[0];
let max = ages[ages.length - 1];
//1.2
len = ages.length;
let median;
if (len % 2 === 0) {
  median = (ages[len / 2] + ages[len / 2 - 1]) / 2;
} else {
  median = ages[parseInt(len / 2) + 1];
}
console.log("Median is:", median);
//1.3
let sum = 0,
  average;
ages.forEach((e) => {
  sum += e;
});
average = sum / len;
console.log("The mean is:", average);
//1.4
let range = ages[ages.length - 1] - ages[0];
console.log("Range:", range);
//1.5
Math.abs(min - average) > Math.abs(max - average)
  ? console.log("Min-average bigger than max-average")
  : console.log("Max-average bigger than min-average");

//2-Slice the first ten countries from the countries array
const firstTen = countries.slice(0, 10);
console.log(firstTen);

//3-Find the middle country(ies) in the countries array
len = countries.length;
if (len % 2 === 0) {
  console.log(countries[len / 2] + countries[len / 2 - 1]);
} else {
  console.log(countries[parseInt(len / 2)]);
}

//4-Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
len = countries.length;
middleIndex = parseInt((len - 1) / 2);
let firstHalf, secondHalf;
if (len % 2 == 0) {
  firstHalf = countries.slice(0, middleIndex + 1);
  secondHalf = countries.slice(middleIndex + 1, len);
  console.log(`First Half:${firstHalf} \nSecond Half:${secondHalf}`);
} else {
  firstHalf = countries.slice(0, middleIndex + 1);
  secondHalf = countries.slice(middleIndex + 1, len);
  console.log(`First Half:${firstHalf} \nSecond Half:${secondHalf}`);
}
