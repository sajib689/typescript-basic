const country = "Kodu";

const toDo = (a: number, b: number) => {
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

const myFunc = (a: string, b: string) => {
  console.log(`Hello ${a} ${b}`);
  return a + b;
};

myFunc("John", "Doe");

type Person = {
  name: string;
  age: number;
  country: string;
};

const manFunction = (person: Person) => {
  console.log(`Hello ${person.name} ${person.age} ${person.country}`);
  return person.name + person.age + person.country;
};

manFunction({ name: "John", age: 30, country: "USA" });

// Generic Array

type GenericArray<param> = Array<param>;

// const rollNumber: Array<number> = [1, 2, 3, 4, 5]
const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];
// const memberName: Array<string> = ["John", "Doe", "Jane", "Smith"]
const memberName: Array<string> = ["John", "Doe", "Jane", "Smith"];
const isActive: GenericArray<boolean> = [true, false, true, false];
// const personDetails: Array<object> = [
//     { name: "John", age: 30, country: "USA" },
//     { name: "Jane", age: 25, country: "Canada" },
//     { name: "Smith", age: 35, country: "UK" }
// ]

const personDetails: GenericArray<object> = [
  { name: "John", age: 30, country: "USA" },
  { name: "Jane", age: 25, country: "Canada" },
  { name: "Smith", age: 35, country: "UK" },
];

const user: GenericArray<{ name: string; age: number; country: string }> = [
  { name: "John", age: 30, country: "USA" },
  { name: "Jane", age: 25, country: "Canada" },
  { name: "Smith", age: 35, country: "UK" },
];

interface Developer<T> {
  name: string;
  age: number;
  country: string;
  computer: {
    brand: string;
    model: string;
    year: number;
  };
  smartWatch: T;
}
type SmartWatch = {
    brand: string;
    model: string;
    year: number;
  }
const developer: Developer<SmartWatch> = {
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
