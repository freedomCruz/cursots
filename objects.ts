type Events = {
    id: number;
    name: string;
}

// funtion to print person details

function printUser(): { name: string; age: number; location?: string } {
    return {
        name: "John Doe",
        age: 30,
        location: "New York"
    }
}

console.log(printUser());

// Arrow function to print person details
const printPerson: { firstName: string; lastName: string; age: number } = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
}
console.log(`Name: ${printPerson.firstName} ${printPerson.lastName}, Age: ${printPerson.age}`);

interface Movie {
    id: number;
    title: string;
    director: string;
    year: number;
    genres: string[];
    rating?: number;
}

const movies: Movie[] = [
    {
        id: 1011,
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genres: ["Sci-Fi", "Action"],
        rating: 8.8
    }

    , {
        id: 1012,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        genres: ["Crime", "Drama"],
        rating: 9.2
    }, {
        id: 1013,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        genres: ["Crime", "Drama"],
        rating: 8.9
    }
]

movies.map((movie) => {
    console.log(`title: ${movie.title}, director: ${movie.director}, year: ${movie.year}, genres: ${movie.genres.join(", ")}, rating: ${movie.rating ? movie.rating : "N/A"}`);
    return movie; 
});

// Intersections type
type User = { 
    id: number;
    userName: string;
}

type Employee = {
    employeeId: number;
    department: string;
    email: string;
}
type UserEmployee = User & Employee;

const userEmployee: UserEmployee = {
    id: 1,
    userName: "john_doe",
    employeeId: 101,
    department: "Engineering",
    email: "johndoe23@email.com"
}

console.log(`User_ID: ${userEmployee.id}, User_Name: ${userEmployee.userName}, Employee_ID: ${userEmployee.employeeId}, Department: ${userEmployee.department}, Email: ${userEmployee.email}`); 

// Tuple type
const userTuple : [number, string, boolean] = [1, "Alice", true];
console.log(`User Tuple - ID: ${userTuple[0]}, Name: ${userTuple[1]}, Active: ${userTuple[2]}`);
// Enum type
enum Status {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending"
}
const userStatus: { id: number; name: string; status: Status } = {
    id: 1,
    name: "Bob",
    status: Status.Active
};

// Type assertion
const someValue: any = "Hello, TypeScript!";

