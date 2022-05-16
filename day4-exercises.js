//  ************ EXERCISE: LEVEL 1 ************

//1-Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let old = prompt("Enter your age:");

result =
  old >= 18
    ? `You are ${old}. You are old enough to drive`
    : `You are ${old}. You will be allowed to drive after ${18 - old} `;
console.log(result);

//2-Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = prompt("Enter your age:");
let myAge = 22;

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} years older then you`);
} else if (myAge == yourAge) {
  console.log(`Both of us are ${myAge} years old`);
} else {
  console.log(`You are ${yourAge - myAge} years older then me`);
}

//3-If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4,
  b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

a > b ? console.log("a is greater than b") : console.log("b is greater than a");

//4-Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter Number:");
number % 2 === 0
  ? console.log(`${number} is an even number`)
  : console.log(`${number} is an odd number`);

//  ************ EXERCISE: LEVEL 2 ************
// 1-Write a code which can give grades to students according to theirs scores:
let score = prompt("Enter the score:");
switch (true) {
  case score >= 80:
    console.log(`Your grades is "A"`);
    break;
  case score >= 70:
    console.log(`Your grades is "B"`);
    break;
  case score >= 60:
    console.log(`Your grades is "C"`);
    break;
  case score >= 50:
    console.log(`Your grades is "D"`);
    break;
  case score >= 0:
    console.log(`Your grades is "F"`);
    break;
  default:
    break;
}

//2-Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = prompt("Enter the month:");

switch (month) {
  case "September":
  case "October":
  case "November":
    console.log("The season is Autumn.");
    break;
  case "December":
  case "January":
  case "February":
    console.log("The season is Winter.");
    break;
  case "March":
  case "April":
  case "May":
    console.log("The season is Spring.");
    break;
  case "June":
  case "July":
  case "August":
    console.log("The season is Summer.");
    break;
  default:
    break;
}

//3-Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("Enter the day:");
day = day.toLowerCase();
day = day[0].toUpperCase() + day.substring(1);

if (day === "Saturday" || day === "Sunday") {
  console.log(`${day} is a weekend`);
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log(`${day} is a working day`);
}

//  ************ EXERCISE: LEVEL 3 ************
//1-Write a program which tells the number of days in a month.
let monthInput = prompt("Enter the month:");
monthInput = monthInput.toLowerCase();
monthInput = monthInput[0].toUpperCase() + monthInput.substring(1);

switch (monthInput) {
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${monthInput} has 30 days`);
    break;
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${monthInput} has 31 days`);
    break;
  case "February":
    console.log(`${monthInput} has 28 days`);
    break;
  default:
    break;
}
