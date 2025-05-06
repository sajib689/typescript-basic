"use strict";
const country = "Kodu";
const toDo = (a, b) => {
    return a + b;
};
toDo(1, 2);
console.log(country);
let person = {
    name: "John",
    age: 30,
    country: "USA"
};
person.name = "Jane";
person.age = 25;
person.country = "Canada";
console.log(person);
const myFunc = (a, b) => {
    console.log(`Hello ${a} ${b}`);
    return a + b;
};
myFunc("John", "Doe");
const manFunction = (person) => {
    console.log(`Hello ${person.name} ${person.age} ${person.country}`);
    return person.name + person.age + person.country;
};
manFunction({ name: "John", age: 30, country: "USA" });
