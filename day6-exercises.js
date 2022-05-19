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

//  ************ EXERCISE: LEVEL 1 ************

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
