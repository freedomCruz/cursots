
function printlt<T, S>(value: T, id: S): void {
    console.log(value, id);
}

// Example usage of the generic function
printlt<string, number>("Hello, Generics!", 123);
printlt<number, string>(456, "Generics are powerful!");
printlt<boolean, string>(true, "This is a boolean value.");


function uniqueDataTypesFunc<Type>(
    item: Type,

    defaultValues: Type
): [Type, Type] {
    return [item, defaultValues];
}

const res = uniqueDataTypesFunc<string>("Hello", "World");
console.log(res);

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
    key: string;
    value: T;
} {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}

const randomPair = getRandomKeyValuePair({ a: 1, b: 2, c: 'Pedrito', d: true });
console.log(randomPair);


/**
 * Filters an array based on a provided condition function.
 *
 * @template T - The type of the elements in the input array.
 * @param {T[]} arr - The array to be filtered.
 * @param {(item: T) => boolean} condition - A function that returns true for elements that should be included.
 * @returns {T[]} An array containing only the elements that satisfy the condition.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const evenNumbers = filterArray(numbers, num => num % 2 === 0);
 * // evenNumbers is [2, 4]
 */
function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
    return arr.filter(condition);
}

// Ejemplo de uso:
const numberArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray<number>(numberArray, num => num % 2 === 0);
console.log('Números pares:', evenNumbers);

const stringArray = ['apple', 'banana', 'cherry', 'date'];
const shortString = filterArray<string>(stringArray, (word) => word.length < 6 );
console.log(shortString);

interface Fruit {
    name: string;
    color: string;
}

const fruitArray: Fruit[] = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Grapes', color: 'Green' },
    { name: 'Cherry', color: 'Red' }
];

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === 'Red');
console.log('Red fruits:', redFruits);