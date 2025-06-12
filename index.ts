type Person = {
    name: string;
    age: number;
};

const person: Person = {
    name: "Peter",
    age: 34
};

console.log(person.name);

// Strings

let myName: string = "William";

console.log(myName);

function suma(a: number, b: number): number {
    return a + b;
}

const multiply = (x: number, y: number): number => {
    return x * y;
}

console.log(suma(24, 53));
console.log(multiply(4, 8));

// Void typescript

function printMessage(message: string): void {
    console.log(`This is my message: ${message}`)
}

printMessage("Here learning typescript to write better and scalable code.")
