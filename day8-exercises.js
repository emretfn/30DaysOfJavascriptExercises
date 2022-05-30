//  ************ EXERCISE: LEVEL 1 ************

//1-Create an empty object called dog
const dog = {};

//2-Print the the dog object on the console
console.log(dog);

//3-Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog["name"] = "Boncuk";
dog["legs"] = 4;
dog["color"] = "Black";
dog["age"] = 2;
dog["bark"] = () => {
  return "woof woof";
};

//4-Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

//5-Set new properties the dog object: breed, getDogInfo
dog["Breed"] = "Golden Retriever";
dog["getDogInfo"] = () => {
  console.log(dog.name, dog.legs, dog.color, dog.age);
};
dog.getDogInfo();

//  ************ EXERCISE: LEVEL 2 ************
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1-Find the person who has many skills in the users object.
let max = 0;
let name;
for (const key in users) {
  if (users[key].skills.length > max) {
    max = users[key].skills.length;
    name = key;
  }
}
console.log(name);
//2-Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedIn = 0,
  greaterFifty = 0;

for (const key of Object.keys(users)) {
  if (users[key].isLoggedIn) {
    loggedIn++;
  }
  if ((users[key].points = 50)) {
    greaterFifty++;
  }
}
console.log(loggedIn, greaterFifty);

//3-Find people who are MERN stack developer from the users object
for (const user of Object.keys(users)) {
  if (
    users[user].skills.includes("MongoDB") &&
    users[user].skills.includes("Express") &&
    users[user].skills.includes("React") &&
    users[user].skills.includes("Node")
  ) {
    console.log(user);
  }
}

//4-Set your name in the users object without modifying the original users object
let copyOfUsers = Object.assign({}, users);
copyOfUsers.Emre = {
  email: "emre@emre.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 23,
  isLoggedIn: true,
  points: 50,
};

//5-Get all keys or properties of users object
let keys = Object.keys(users);

//6-Get all the values of users object
let values = Object.values(users);

//7-Use the countries object to print a country name, capital, populations and languages.
const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
];
countries.map((e) => {
  console.log(e.name, e.capital, e.population, e.languages);
});
