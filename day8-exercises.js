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
