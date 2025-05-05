
const country = "Kodu";

const toDo = (a: number, b: number) => {
    return a + b;
}


toDo(1, 2)

console.log(country)

let person = {
    name: "John",
    age: 30,
    country: "USA"
}

person.name = "Jane"
person.age = 25
person.country = "Canada"
console.log(person)

let myFunc: Function

 myFunc = () => {
    console.log("Hello, World!");
}