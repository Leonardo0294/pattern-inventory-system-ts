interface Observador {
    notificar(cambio: string): void;
}

class Soporte implements Observador {
    public notificar(cambio: string): void {
        console.log(`Soporte notificado: ${cambio}`);
    }
}

class Equipo {
    private observadores: Observador[] = [];

    constructor(
        public nombre: string,
        public tipo: string,
        public estado: string
    ) {}

    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    public cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        for (const observador of this.observadores) {
            observador.notificar(`${this.nombre} ha cambiado su estado a ${this.estado}`);
        }
    }
}

// Prueba del patrón Observer
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");

