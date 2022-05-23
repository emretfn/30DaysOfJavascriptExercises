//  ************ EXERCISE: LEVEL 1 ************

//1-Declare a function fullName and it print out your full name.
function fullName() {
  console.log("Emre TUFAN");
}

//2-Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

//3-Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  return num1 + num2;
}

//4-An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width;
}

//5-A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

//6-A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

//7-Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

//8-Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
  return Math.PI * 2 * radius;
}

//9-Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  return mass / volume;
}

//10-Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calcSpeed(distance, time) {
  return distance / time;
}

//11-Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calcWeight(mass, gravity) {
  return mass * gravity;
}

//12-Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
//prettier-ignore
function convertCelsiusToFahrenheit(celcius) {
  return (celcius * 9 / 5) + 32;
}

//13-Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//prettier-ignore
function calcBMI(kg, height) {
  height /= 100;
  let BMI = kg / (height ** 2);
  switch (true) {
      case BMI < 18.5:
          console.log("You are underweight");
          break;
      case BMI < 24.9:
          console.log("You are normal weight");
          break;
      case BMI < 29.9:
          console.log("You are overweigth");
          break;
      case BMI >= 30:
          console.log("You are obese");
          break;
      default:
          break;
  }
}
//14-Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
//prettier-ignore
function checkSeason(month) {
  if (month === "December" || month === "January" || month === "February") {
    return "Winter"
  }else if (month === "March" || month === "April" || month === "May") {
    return "Spring"
  }else if (month === "June" || month === "July" || month === "August") {
    return "Summer"
  }else if (month === "September" || month === "October" || month === "November") {
    return "Autumn"
  }
}

//15-Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  let max;
  for (const elem of arguments) {
    if (max === undefined) {
      max = elem;
    } else if (elem > max) {
      max = elem;
    }
  }
  return max;
}

//  ************ EXERCISE: LEVEL 2 ************

//1-Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
//prettier-ignore
function solveLinEquation(a, b, c) {
  return `x = (-${b}y - ${c}) / ${a}`
}

//2-Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
//(-b±√(b²-4ac))/(2a) prettier-ignore
//prettier-ignore
function solveQuadEquation(a,b,c) {
  let positive = -b + (((b**2)-4*a*c) ** 0.5) / (2*a)
  let negative = -b - (((b**2)-4*a*c) ** 0.5) / (2*a)
  return [positive,negative]
}

//3-Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
  for (const elem of array) {
    console.log(elem);
  }
}

//4-Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = function () {
  const time = new Date();
  let day = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let mins = time.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  console.log(`${day}/${month}/${year} ${hours}:${mins}`);
};
//5-Declare a function name swapValues. This function swaps value of x to y.
const swapValues = function (x, y) {
  let temp = x;
  x = y;
  y = temp;
  return [x, y];
};

//6-Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

//7-Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
  let capitalizedarray = [];
  for (const elem of array) {
    capitalizedarray.push(elem.toUpperCase());
  }
  return capitalizedarray;
}

//8-Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (array, item) => {
  return array.push(item);
};

//9-Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (array, index) => {
  return array.splice(index, 1);
};

//10-Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

//11-Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
};

//12-Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};

//13-Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (a) => {
  let numberOfOdds = 0;
  let numberOfEvens = 0;
  for (let i = 0; i <= a; i++) {
    if (i % 2 === 0) {
      numberOfEvens += 1;
    } else {
      numberOfOdds += 1;
    }
  }
  return [numberOfEvens, numberOfOdds];
};

//14-Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...args) => {
  let sum = 0;
  for (const elem of args) {
    sum += elem;
  }
  return sum;
};

//15-Writ a function which generates a randomUserIp.

function generateIP() {
  let first = Math.floor(Math.random() * 256);
  let second = Math.floor(Math.random() * 256);
  let third = Math.floor(Math.random() * 256);
  let fourth = Math.floor(Math.random() * 256);

  return `${first}.${second}.${third}.${fourth}`;
}

//16-Write a function which generates a randomMacAddress
let hexadecimal = "0123456789ABCDEF";
let macArray = [];
for (let i = 0; i < 7; i++) {
  let firstString = hexadecimal[Math.floor(Math.random() * 15)];
  let secondString = hexadecimal[Math.floor(Math.random() * 15)];
  macArray.push(firstString + secondString);
}
console.log(macArray.join(":"));

//17-Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const hexGen = () => {
  hexadecimal = "0123456789abcdef";
  let randHex = "";
  for (let i = 0; i < 6; i++) {
    randHex += hexadecimal.charAt(
      Math.floor(Math.random() * hexadecimal.length)
    );
  }
  console.log(`#${randHex}`);
};
hexGen();
//18-Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const idGen = () => {
  chars =
    "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZabcçdefgğhıijklmnoöprsştuüvyz0123456789";
  randText = "";
  len = chars.length;
  for (let i = 0; i < 7; i++) {
    randText += chars.charAt(Math.floor(Math.random() * len));
  }
  console.log(randText);
};
idGen();
