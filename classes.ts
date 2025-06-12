/**
 * Clase que representa un Tiquet.
 * Todas sus propiedades son privadas para controlar el acceso y la modificación.
 */
class Tiquet {
    private id: number;
    private title: string;
    private description: string;
    private status: string;
    private priority: string;
    private createdAt: Date;
    private updatedAt: Date;

    /**
     * Constructor de la clase Tiquet.
     * Permite crear instancias con valores específicos o una instancia "vacía"
     * utilizando los valores por defecto de los parámetros.
     *
     * @param id El identificador único del tiquet. Por defecto es -1 (indicando no asignado).
     * @param title El título del tiquet. Por defecto es "Nuevo Tiquet sin Título".
     * @param description La descripción del tiquet. Por defecto es "Descripción pendiente.".
     * @param status El estado actual del tiquet. Por defecto es "Abierto".
     * @param priority La prioridad del tiquet. Por defecto es "Baja".
     */
    constructor(
        id: number = -1, // ID por defecto, -1 para indicar que no ha sido asignado aún
        title: string = "Nuevo Tiquet sin Título",
        description: string = "Descripción pendiente.",
        status: string = "Abierto",
        priority: string = "Baja"
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.createdAt = new Date(); // Fecha de creación siempre es la actual
        this.updatedAt = new Date(); // Fecha de actualización inicial
    }

    // --- Getters para acceder a las propiedades privadas ---

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStatus(): string {
        return this.status;
    }

    public getPriority(): string {
        return this.priority;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    // --- Setters para modificar las propiedades privadas ---

    public setId(id: number): void {
        if (id < 0) {
            throw new Error("El ID no puede ser negativo.");
        }
        this.id = id;
        this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }

    public setTitle(title: string): void {
        if (title.length < 5) {
            throw new Error("El título debe tener al menos 5 caracteres.");
        }
        this.title = title;
        this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }

    public setDescription(description: string): void {
        if (description.length < 10) {
            throw new Error("La descripción debe tener al menos 10 caracteres.");
        }
        this.description = description;
        this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }

    public setStatus(status: string): void {
        const validStatuses = ["Abierto", "En Progreso", "Cerrado", "Reabierto"];
        if (!validStatuses.includes(status)) {
            throw new Error(`Estado inválido: '${status}'. Los estados permitidos son: ${validStatuses.join(", ")}.`);
        }
        this.status = status;
        this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }

    public setPriority(priority: string): void {
        const validPriorities = ["Baja", "Media", "Alta", "Crítica"];
        if (!validPriorities.includes(priority)) {
            throw new Error(`Prioridad inválida: '${priority}'. Las prioridades permitidas son: ${validPriorities.join(", ")}.`);
        }
        this.priority = priority;
        this.updatedAt = new Date(); // Actualizar la fecha de modificación
    }

    // Nota: createdAt no suele tener un setter público, se establece solo en el constructor.
    // updatedAt se actualiza automáticamente con los setters de otras propiedades.

    /**
     * Devuelve una representación en cadena del objeto Tiquet.
     */
    public toString(): string {
        return `Tiquet ID: ${this.id}\n` +
               `  Título: ${this.title}\n` +
               `  Descripción: ${this.description}\n` +
               `  Estado: ${this.status}\n` +
               `  Prioridad: ${this.priority}\n` +
               `  Creado: ${this.createdAt.toLocaleDateString()} ${this.createdAt.toLocaleTimeString()}\n` +
               `  Actualizado: ${this.updatedAt.toLocaleDateString()} ${this.updatedAt.toLocaleTimeString()}`;
    }
}

// --- Ejemplos de uso ---

console.log("--- Creación de un tiquet 'vacío' ---");
// Puedes crear una instancia sin pasar ningún argumento.
// Los valores por defecto se aplicarán automáticamente.
const myTiquet = new Tiquet();
console.log(myTiquet.toString()); // Muestra los valores por defecto

console.log("\n--- Asignación de propiedades a un tiquet 'vacío' ---");
// Ahora puedes usar los setters para asignar valores.
myTiquet.setId(101);
myTiquet.setTitle("Error al cargar la página de inicio de sesión");
myTiquet.setDescription("Al intentar acceder a la página de inicio de sesión, se muestra un error 500 y no se carga la interfaz.");
myTiquet.setStatus("En Progreso");
myTiquet.setPriority("Alta");
console.log(myTiquet.toString());

console.log("\n--- Creación de un tiquet con valores iniciales ---");
// También puedes crear un tiquet con todos los valores desde el principio.
const fullTiquet = new Tiquet(
    202,
    "Nueva funcionalidad: exportar informes",
    "Se requiere una nueva funcionalidad para permitir a los usuarios exportar informes en formato PDF y CSV.",
    "Abierto",
    "Media"
);
console.log(fullTiquet.toString());

console.log("\n--- Ejemplos de validación en setters (manejo de errores) ---");
try {
    myTiquet.setTitle("Corto"); // Esto debería lanzar un error debido a la validación
} catch (error: any) {
    console.error("Error al establecer título:", error.message);
}

try {
    myTiquet.setStatus("Estado Invalido"); // Esto debería lanzar un error
} catch (error: any) {
    console.error("Error al establecer estado:", error.message);
}

