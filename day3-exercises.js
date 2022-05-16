//  ************ EXERCISE: LEVEL 1 ************

//1-Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Emre",
  lastName = "TUFAN",
  country = "Turkey",
  city = "Konya",
  age = 22,
  isMarried = false,
  year = 2022;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

//2-Check if type of '10' is equal to 10
console.log(typeof "10" === typeof 10);

//3-Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);

//4-Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
console.log(4 < 6);
console.log(typeof "Emre" === typeof "Turkey");
console.log(5 <= 5);
console.log(4 > 6);
console.log(typeof "Emre" === typeof 22);
console.log(parseInt("9.8") === 10);

//5-Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3 ,true
// 4 >= 3 ,true
// 4 < 3 ,false
// 4 <= 3 ,false
// 4 == 4 ,true
// 4 === 4 ,true
// 4 != 4 ,false
// 4 !== 4 ,false
// 4 != '4' ,false
// 4 == '4' ,true
// 4 === '4' ,false
// Find the length of python and jargon and make a falsy comparison statement.
console.log(
  4 > 3,
  4 >= 3,
  4 < 3,
  4 <= 3,
  4 == 4,
  4 === 4,
  4 != 4,
  4 !== 4,
  4 != "4",
  4 == "4",
  4 === "4",
  "python".length === "jargon".length
);
//6-Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12 , true
// 4 > 3 && 10 > 12 , false
// 4 > 3 || 10 < 12 , true
// 4 > 3 || 10 > 12 , true
// !(4 > 3) , false
// !(4 < 3) , true
// !(false) , true
// !(4 > 3 && 10 < 12) , false
// !(4 > 3 && 10 > 12) , true
// !(4 === '4') , true
// There is no 'on' in both dragon and python
console.log(
  4 > 3 && 10 < 12,
  4 > 3 && 10 > 12,
  4 > 3 || 10 < 12,
  4 > 3 || 10 > 12,
  !(4 > 3),
  !(4 < 3),
  !false,
  !(4 > 3 && 10 < 12),
  !(4 > 3 && 10 > 12),
  !(4 === "4"),
  !("dragon".includes("on") && "python".includes("on"))
);

//7-Use the Date object to do the following activities
// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

const dateObj = new Date();
console.log(dateObj.getFullYear()); //Year
console.log(dateObj.getMonth() + 1); //Month as a number
console.log(dateObj); //Date
console.log(dateObj.getDate()); //Date as a number
console.log(dateObj.getHours()); //Hours
console.log(dateObj.getMinutes()); //Minutes
console.log(dateObj.getTime());

//  ************ EXERCISE: LEVEL 2 ************

//1-Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

let base = prompt("Enter base:");
let height = prompt("Enter height:");
console.log(`The area of the trianle is ${base * height * 0.5}`);

//2-Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt("Enter side a:");
let sideB = prompt("Enter side b:");
let sideC = prompt("Enter side c:");
console.log(`The perimeter of the triangle is ${a + b + c}`);

//3-Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length:");
let width = prompt("Enter width:");
console.log(`Area of the rectangle is ${length * width}`);

//4-Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter radius:");
console.log(`Area of the circle is ${Math.PI * r * r}`);

//5-Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope1 = 2; //y = mx + b and m is slope

//6-Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y2 = 10,
  y1 = 1,
  x2 = 6,
  x1 = 2;
let slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2);

//7-Compare the slope of above two questions.
slope1 > slope2
  ? "Slope1 is bigger than slope2"
  : "Slope2 is bigger than slope1";

//8-Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x, y;
for (x = 0; x <= 3; x++) {
  y = 2 * x + 6 * x + 9;
  console.log(`For x = ${x} y is ${y}`);
}

//9-Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter hours:");
let ratePerHour = prompt("Enter rate per hour:");
console.log(`Your daily pay is:${hours * ratePerHour}`);

//10-If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = "Emre";
let result = name.length > 7 ? "Your name is long" : "Your name is short";
console.log(result);

//11-Compare your first name length and your family name length and you should get this output.
firstName = "Emre";
lastName = "TUFAN";

result =
  firstName.length > lastName.length
    ? `Your first name, ${firstName} is longer than your family name, ${lastName}`
    : `Your last name, ${lastName} is longer than your first name, ${firstName}`;
console.log(result);

//12-Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 100,
  yourAge = 20;

result =
  myAge > yourAge
    ? `I am ${myAge - yourAge} years older then you`
    : `You are ${yourAge - myAge} years older then me`;
console.log(result);

//13-Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let birthYear = prompt("What year were you born?"); - in node.js there isn't prompt :(
let birthYear = 1999;
year = dateObj.getFullYear();
let old = year - birthYear;

result =
  old > 18
    ? `You are ${old}. You are old enough to drive`
    : `You are ${old}. You will be allowed to drive after ${18 - old} `;
console.log(result);

//14-Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let years = prompt("Enter number of years you live:"); - in node.js there isn't prompt :(
let years = 100;
console.log(`You lived ${years * 31556926} seconds.`);

//15-Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

year = dateObj.getFullYear();
month = dateObj.getMonth() + 1;
day = dateObj.getDate();
hours = dateObj.getHours();
minutes = dateObj.getMinutes();

console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);

//  ************ EXERCISE: LEVEL 3 ************

//1-Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

year = dateObj.getFullYear();
month = dateObj.getMonth() + 1;
day = dateObj.getDate();
hours = dateObj.getHours();
minutes = dateObj.getMinutes();

minutes < 10 ? (minutes = `0${minutes}`) : minutes;
hours < 10 ? (hours = `0${hours}`) : hours;
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
