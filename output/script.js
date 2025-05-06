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
    country: "USA",
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
// const rollNumber: Array<number> = [1, 2, 3, 4, 5]
const rollNumber = [1, 2, 3, 4, 5];
// const memberName: Array<string> = ["John", "Doe", "Jane", "Smith"]
const memberName = ["John", "Doe", "Jane", "Smith"];
const isActive = [true, false, true, false];
// const personDetails: Array<object> = [
//     { name: "John", age: 30, country: "USA" },
//     { name: "Jane", age: 25, country: "Canada" },
//     { name: "Smith", age: 35, country: "UK" }
// ]
const personDetails = [
    { name: "John", age: 30, country: "USA" },
    { name: "Jane", age: 25, country: "Canada" },
    { name: "Smith", age: 35, country: "UK" },
];
const user = [
    { name: "John", age: 30, country: "USA" },
    { name: "Jane", age: 25, country: "Canada" },
    { name: "Smith", age: 35, country: "UK" },
];
const developer = {
    name: "John",
    age: 30,
    country: "USA",
    computer: {
        brand: "Apple",
        model: "MacBook Pro",
        year: 2020,
    },
    smartWatch: {
        brand: "Apple",
        model: "Apple Watch Series 6",
        year: 2020,
    },
};
