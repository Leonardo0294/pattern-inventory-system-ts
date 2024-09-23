class Equipo {
    constructor(
        public nombre: string,
        public tipo: string,
        public ram: string,
        public procesador: string
    ) {}
}

class Notebook extends Equipo {}
class Desktop extends Equipo {}
class Servidor extends Equipo {}

class EquipoFactory {
    public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
        switch (tipo) {
            case "Notebook":
                return new Notebook(nombre, "Notebook", ram, procesador);
            case "Desktop":
                return new Desktop(nombre, "Desktop", ram, procesador);
            case "Servidor":
                return new Servidor(nombre, "Servidor", ram, procesador);
            default:
                throw new Error("Tipo de equipo no reconocido");
        }
    }
}

// Prueba del Factory Method
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook);
