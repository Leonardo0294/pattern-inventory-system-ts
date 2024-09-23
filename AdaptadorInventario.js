// Clase antigua de inventario
var InventarioViejo = /** @class */ (function () {
    function InventarioViejo() {
        this.items = [];
    }
    InventarioViejo.prototype.agregarItem = function (item) {
        this.items.push(item);
    };
    InventarioViejo.prototype.obtenerItems = function () {
        return this.items;
    };
    return InventarioViejo;
}());
// Clase adaptadora
var AdaptadorInventario = /** @class */ (function () {
    function AdaptadorInventario(inventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }
    AdaptadorInventario.prototype.agregarEquipo = function (nombre, tipo, estado) {
        this.inventarioViejo.agregarItem({ nombre: nombre, tipo: tipo, estado: estado });
    };
    AdaptadorInventario.prototype.listarEquipos = function () {
        return this.inventarioViejo.obtenerItems();
    };
    return AdaptadorInventario;
}());
// Prueba del patrón Adaptador
var inventarioViejo = new InventarioViejo();
var adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
