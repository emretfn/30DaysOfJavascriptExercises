//  ************ EXERCISE: LEVEL 1 ************

//1-Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

//2-Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

// 3-Iterate 0 to n using for loop
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

//4-Write a loop that makes the following pattern using console.log():
for (let i = 0; i <= 7; i++) {
  console.log("#".repeat(i));
}

//5-Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//6-Using loop print the following pattern
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}

//7-Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//8-Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//9-Use for loop to iterate from 0 to 100 and print only prime numbers

//10-Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("Sum:", sum);

//11-Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEvens = 0,
  sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
console.log(`Evens sum: ${sumEvens}, Odds sum: ${sumOdds}`);

//12-Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
sumEvens = 0;
sumOdds = 0;
let emptyArray = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
emptyArray.push(sumEvens);
emptyArray.push(sumOdds);
console.log(emptyArray);

//13-Develop a small script which generate array of 5 random numbers
let randomArray = [];
for (let i = 0; i < 5; i++) {
  randomArray.push(parseInt(Math.random() * 11));
}
console.log(randomArray);

//14-Develop a small script which generate array of 5 random numbers and the numbers must be unique
randomArray = [];
let randomNum;
while (randomArray.length < 5) {
  randomNum = parseInt(Math.random() * 11);
  if (!randomArray.includes(randomNum)) {
    randomArray.push(randomNum);
  }
}
console.log(randomArray);

//15-Develop a small script which generate a six characters random id
let chars =
  "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZabcçdefgğhıijklmnoöprsştuüvyz0123456789";
let randText = "";
let len = chars.length;
for (let i = 0; i <= 6; i++) {
  randText += chars.charAt(Math.floor(Math.random() * len));
}
console.log(randText);

//  ************ EXERCISE: LEVEL 2 ************

//1-Develop a small script which generate any number of characters random id:
chars = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZabcçdefgğhıijklmnoöprsştuüvyz0123456789";
let anyNumber = Math.floor(Math.random() * 26);
randText = "";
len = chars.length;
for (let i = 0; i <= anyNumber; i++) {
  randText += chars.charAt(Math.floor(Math.random() * len));
}
console.log(randText);

//2-Write a script which generates a random hexadecimal number.

let hexadecimal = "0123456789abcdef";
let randHex = "";
for (let i = 0; i < 6; i++) {
  randHex += hexadecimal.charAt(Math.floor(Math.random() * hexadecimal.length));
}
console.log(`#${randHex}`);

//3-Write a script which generates a random rgb color number.
let randomRGB = [];
for (let i = 0; i < 3; i++) {
  randomRGB.push(Math.floor(Math.random() * 256));
}
console.log(`rgb(${randomRGB[0]},${randomRGB[1]},${randomRGB[2]})`);

//4-Using the above countries array, create the following new array.
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
let capitalArray = [];
for (let i = 0; i < countries.length; i++) {
  capitalArray.push(countries[i].toUpperCase());
}
console.log(capitalArray);

//5-Using the above countries array, create an array for countries length'.
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

//6-Use the countries array to create the following array of arrays:
let newArray = [];
for (const country of countries) {
  let len = country.length;
  let firstThree = country.slice(0, 3).toUpperCase();
  newArray.push([country, firstThree, len]);
}
console.log(newArray);

//7-In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let landArray = [];
let landCounter = 0;
for (const country of countries) {
  if (country.includes("land")) {
    landArray.push(country);
    landCounter++;
  }
}
if (landCounter === 0) {
  console.log("All these countries are without land");
} else {
  console.log(landArray);
}

//8-In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let iaArray = [];
let iaCounter = 0;
for (const country of countries) {
  if (country.endsWith("ia")) {
    iaArray.push(country);
    iaCounter++;
  }
}
if (iaCounter === 0) {
  console.log("These are countries ends without ia");
} else {
  console.log(iaArray);
}

//9-Using the above countries array, find the country containing the biggest number of characters.
let countryLength = [];

for (const country of countries) {
  countryLength.push([country.length, country]);
}
countryLength.sort().reverse();
console.log(countryLength[0][1]);

//10-Using the above countries array, find the country containing only 5 characters.
//using the countryLength array found above
let fiveChars = [];
for (const country of countryLength) {
  if (country[0] === 5) {
    fiveChars.push(country[1]);
  }
}
console.log(fiveChars);
