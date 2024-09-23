var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Equipo = /** @class */ (function () {
    function Equipo(nombre, tipo, ram, procesador) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ram = ram;
        this.procesador = procesador;
    }
    return Equipo;
}());
var Notebook = /** @class */ (function (_super) {
    __extends(Notebook, _super);
    function Notebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Notebook;
}(Equipo));
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Desktop;
}(Equipo));
var Servidor = /** @class */ (function (_super) {
    __extends(Servidor, _super);
    function Servidor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Servidor;
}(Equipo));
var EquipoFactory = /** @class */ (function () {
    function EquipoFactory() {
    }
    EquipoFactory.prototype.crearEquipo = function (tipo, nombre, ram, procesador) {
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
    };
    return EquipoFactory;
}());
// Prueba del Factory Method
var factory = new EquipoFactory();
var notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook);
