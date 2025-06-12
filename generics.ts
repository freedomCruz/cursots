function print<T, S>(value: T, id: S): void {
    console.log(value, id);
}

// Example usage of the generic function
print<string, number>("Hello, Generics!", 123); 
print<number, string>(456, "Generics are powerful!");
print<boolean, string>(true, "This is a boolean value.");

