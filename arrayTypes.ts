// Arrays in typescript only accepts values of the same type.
// but if you want to create an array with other typse you must
// use this sintaxys (number | string)[]

const cars: string[] = ['mecedez', 'bmw', 'ferrri', 'lamborgini']

console.log(cars)

const models: (number | string)[] = ['monserrat', 2008, 'xs200', 350]

console.log(models);

/**
 * Representa una matriz matemática.
 */
class Matrix {
    // La matriz real, un array de arrays de números.
    private data: number[][];
    // Número de filas de la matriz.
    public readonly rows: number;
    // Número de columnas de la matriz.
    public readonly cols: number;

    /**
     * Constructor de la clase Matrix.
     * @param rows El número de filas de la matriz.
     * @param cols El número de columnas de la matriz.
     * @param initialValue (Opcional) Un valor para inicializar todos los elementos de la matriz. Por defecto es 0.
     */
    constructor(rows: number, cols: number, initialValue: number = 0) {
        if (rows <= 0 || cols <= 0) {
            throw new Error("El número de filas y columnas debe ser positivo.");
        }

        this.rows = rows;
        this.cols = cols;
        this.data = [];

        // Inicializa la matriz con el valor especificado (o 0 por defecto).
        for (let i = 0; i < rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < cols; j++) {
                this.data[i][j] = initialValue;
            }
        }
    }

    /**
     * Crea una matriz a partir de un array bidimensional existente.
     * @param inputData Un array bidimensional de números.
     * @returns Una nueva instancia de Matrix.
     */
    public static fromArray(inputData: number[][]): Matrix {
        if (!inputData || inputData.length === 0) {
            throw new Error("El array de entrada no puede estar vacío.");
        }

        const rows = inputData.length;
        const cols = inputData[0].length;

        // Verificar que todas las filas tengan la misma longitud.
        for (let i = 1; i < rows; i++) {
            if (inputData[i].length !== cols) {
                throw new Error("Todas las filas del array de entrada deben tener la misma longitud.");
            }
        }

        const matrix = new Matrix(rows, cols);
        // Copia profunda para evitar mutaciones externas del array original.
        matrix.data = inputData.map(row => [...row]);
        return matrix;
    }

    /**
     * Obtiene el valor de un elemento específico de la matriz.
     * @param row La fila del elemento (índice base 0).
     * @param col La columna del elemento (índice base 0).
     * @returns El valor del elemento.
     * @throws Error si los índices están fuera de rango.
     */
    public get(row: number, col: number): number {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
            throw new Error(`Índices fuera de rango: (${row}, ${col}). La matriz es de ${this.rows}x${this.cols}.`);
        }
        return this.data[row][col];
    }

    /**
     * Establece el valor de un elemento específico de la matriz.
     * @param row La fila del elemento (índice base 0).
     * @param col La columna del elemento (índice base 0).
     * @param value El nuevo valor para el elemento.
     * @throws Error si los índices están fuera de rango.
     */
    public set(row: number, col: number, value: number): void {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
            throw new Error(`Índices fuera de rango: (${row}, ${col}). La matriz es de ${this.rows}x${this.cols}.`);
        }
        this.data[row][col] = value;
    }

    /**
     * Suma esta matriz con otra matriz.
     * @param other La otra matriz a sumar.
     * @returns Una nueva matriz que es el resultado de la suma.
     * @throws Error si las dimensiones de las matrices no coinciden.
     */
    public add(other: Matrix): Matrix {
        if (this.rows !== other.rows || this.cols !== other.cols) {
            throw new Error("Las matrices deben tener las mismas dimensiones para la suma.");
        }

        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.set(i, j, this.get(i, j) + other.get(i, j));
            }
        }
        return result;
    }

    /**
     * Multiplica esta matriz por otra matriz.
     * @param other La otra matriz por la cual multiplicar.
     * @returns Una nueva matriz que es el resultado de la multiplicación.
     * @throws Error si el número de columnas de la primera matriz no coincide con el número de filas de la segunda.
     */
    public multiply(other: Matrix): Matrix {
        if (this.cols !== other.rows) {
            throw new Error("El número de columnas de la primera matriz debe ser igual al número de filas de la segunda para la multiplicación.");
        }

        const result = new Matrix(this.rows, other.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.get(i, k) * other.get(k, j);
                }
                result.set(i, j, sum);
            }
        }
        return result;
    }

    /**
     * Imprime la matriz en la consola de una manera legible.
     */
    public print(): void {
        console.log("--- Matriz ---");
        for (let i = 0; i < this.rows; i++) {
            console.log(this.data[i].join("\t")); // Usa tabulaciones para alinear los elementos
        }
        console.log("--------------");
    }
}

// --- Ejemplos de uso ---

console.log("--- Creación de matrices ---");
const matrixA = new Matrix(2, 3, 1); // Matriz 2x3 con todos los valores en 1
matrixA.set(0, 1, 5); // Cambiar un valor
matrixA.print();


const matrixB = Matrix.fromArray([
    [1, 2, 3],
    [4, 5, 6]
]);
matrixB.print();


const matrixC = new Matrix(3, 2); // Matriz 3x2 con valores iniciales de 0
matrixC.set(0, 0, 7);
matrixC.set(1, 1, 8);
matrixC.set(2, 0, 9);
matrixC.print();


console.log("\n--- Suma de matrices ---");
try {
    const sumMatrix = matrixA.add(matrixB);
    sumMatrix.print();

    // Ejemplo de error: intento de suma con dimensiones diferentes.
    // Descomenta la siguiente línea para ver el error:
    // const invalidSum = matrixA.add(new Matrix(2,2)); // Esto lanzaría un error
    // invalidSum.print();
} catch (error: any) {
    console.error("Error en suma:", error.message);
}

console.log("\n--- Multiplicación de matrices ---");
try {
    const multiMatrix = matrixA.multiply(matrixC); // Multiplicación de (2x3) * (3x2) = (2x2)
    multiMatrix.print();

    // Ejemplo de error: intento de multiplicación con dimensiones incompatibles.
    // Descomenta la siguiente línea para ver el error:
    // const invalidMulti = matrixA.multiply(matrixA); // Esto lanzaría un error
    // invalidMulti.print();
} catch (error: any) {
    console.error("Error en multiplicación:", error.message);
}

console.log("\n--- Acceso y modificación de elementos ---");
try {
    console.log(`Elemento en (0, 1) de matrixA: ${matrixA.get(0, 1)}`);
    matrixA.set(0, 1, 100);
    console.log(`Elemento en (0, 1) de matrixA después de set: ${matrixA.get(0, 1)}`);

    // Ejemplo de error: intento de acceder a un índice fuera de rango.
    // Descomenta la siguiente línea para ver el error:
    // console.log(matrixA.get(10, 10));
} catch (error: any) {
    console.error("Error al acceder/establecer elemento:", error.message);
}
