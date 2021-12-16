"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// El primer parametro es el nombre de la base de datos
// El segundo parametro es el nombre de usuario
// El tercer parametro es la contraseña
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map