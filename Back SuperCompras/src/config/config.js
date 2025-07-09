const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost", //URL del servidor
  user: "root", //El nombre del dueño de la BD
  password: "sena1234",
  database: "db_supercompras",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Base de datos conectada");
});

module.exports = db;
