var Soporte = /** @class */ (function () {
    function Soporte() {
    }
    Soporte.prototype.notificar = function (cambio) {
        console.log("Soporte notificado: ".concat(cambio));
    };
    return Soporte;
}());
var Equipo = /** @class */ (function () {
    function Equipo(nombre, tipo, estado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
        this.observadores = [];
    }
    Equipo.prototype.agregarObservador = function (observador) {
        this.observadores.push(observador);
    };
    Equipo.prototype.cambiarEstado = function (nuevoEstado) {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    };
    Equipo.prototype.notificarObservadores = function () {
        for (var _i = 0, _a = this.observadores; _i < _a.length; _i++) {
            var observador = _a[_i];
            observador.notificar("".concat(this.nombre, " ha cambiado su estado a ").concat(this.estado));
        }
    };
    return Equipo;
}());
// Prueba del patrón Observer
var soporte = new Soporte();
var equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.
