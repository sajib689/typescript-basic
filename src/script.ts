
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



 const myFunc = (a: string, b: string) => {
    console.log(`Hello ${a} ${b}`)
    return a + b;
}

myFunc("John", "Doe")

type Person = {
    name: string;
    age: number;
    country: string;
}


const manFunction = (person: Person) => {
    console.log(`Hello ${person.name} ${person.age} ${person.country}`)
    return person.name + person.age + person.country;
}

manFunction({ name: "John", age: 30, country: "USA" })


