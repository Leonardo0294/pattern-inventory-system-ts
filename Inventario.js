var Inventario = /** @class */ (function () {
    function Inventario() {
        this.equipos = [];
    }
    Inventario.obtenerInstancia = function () {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    };
    Inventario.prototype.agregarEquipo = function (nombre, tipo, estado) {
        this.equipos.push({ nombre: nombre, tipo: tipo, estado: estado });
    };
    Inventario.prototype.listarEquipos = function () {
        return this.equipos;
    };
    return Inventario;
}());
// Prueba del Singleton
var inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
