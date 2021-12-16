import { Sequelize  } from "sequelize";

// El primer parametro es el nombre de la base de datos
// El segundo parametro es el nombre de usuario
// El tercer parametro es la contraseña
const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
