interface Ticket {
    id: number;
    title: string;  
    description: string;
    status: string;
}

const ticket : Ticket = {
    id: 1,
    title: "Ticket de ejemplo",
    description: "Descripción del ticket de ejemplo",
    status: "abierto"
}

console.log(ticket);


// Interface for a function

interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

// Interface for a class    
interface Users {
    id: number;
    name: string;
    email: string;
}

class UserImpl implements Users {
    constructor(public id: number, public name: string, public email: string) {
        this.id = id;
        this.name = name;   
        this.email = email;
    }
}

const user = new UserImpl(1, "John Doe", "john@email.com");
console.log(user); // Output: UserImpl { id: 1, name: 'John Doe', email: '

// ==========================================

interface MovieDetails {
    title: string;
    director: string;
    year: number;
    rating: number;
    printMovieDetails(title: string, director: string, price: number ): string | number;
}

interface Gender extends MovieDetails {
    genera: string;
}

const movie1: Gender = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    genera: "Sci-Fi",
    printMovieDetails(title, director, price) {
        return `Title: ${title}, Director: ${director}, Price: $${price}`;
    },
};

const printMovie1 = movie1.printMovieDetails(movie1.title, movie1.director, 19.99);
console.log(printMovie1); 

// Declaration merging example. You will be able to define the same interface multiple times, and TypeScript will merge them into a single interface.

interface Car {
    brand: string;
    start(): void;
}

interface Car {
    model: string;
    stop(): void;
}

const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    start() {
        console.log(`${this.brand} ${this.model} is starting.`);
    },
    stop() {
        console.log(`${this.brand} ${this.model} is stopping.`);
    }
};
myCar.start(); // Output: Toyota Corolla is starting.
myCar.stop(); // Output: Toyota Corolla is stopping.