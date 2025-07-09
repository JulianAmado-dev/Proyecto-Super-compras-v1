const db = require("../config/config");

const User = {};

User.login = (user, result) => {
  const sql = "SELECT * FROM Usuarios WHERE correo = ? AND contrasena = ?";

  db.query(
    sql,
    [user.correo, user.contrasena],

    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        console.log(res);
        result(null, res);
      }
    }
  );
};

User.registrar = (user, result) => {
  //Revisa si el cliente existe
  console.log("paso 2: ", user); //PROVISIONAL
  const sql = "SELECT * FROM Usuarios  WHERE correo = ? OR nombres = ?";
  db.query(sql, [user.correo, user.nombres], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      console.log("paso 3: ", res); //PROVISIONAL
      if (res.length > 0) {
        result(null, { message: "Usuario ya registrado" });
      } else {
        //console.log("**************", user); //FOR TRESTING
        //Si no existe, lo registra
        const sql =
          "INSERT INTO Usuarios (correo, nombres, direccion, contrasena, codRol) VALUES (?,?,?,?,1);";
        db.query(
          sql,
          [user.correo, user.nombres, user.direccion, user.contrasena],
          (err, res) => {
            if (err) {
              result(err, null);
            } else {
              console.log("Usuario registrado: ");
              result(null, {
                message: "Usuario registrado: " + res.insertId,
              });
            }
          }
        );
      }
    }
  });
};

User.revisarActualizar = (user, result) => {
  const sql = "SELECT * FROM Usuarios WHERE correo = ?";
  db.query(sql, [user.correo], (err, res) => {
    if (err) {
      console.log("error aqui");
      result(err, null);
    } else {
      console.log("datos revisados");
      const sql =
        "UPDATE Usuarios SET nombres = ?, direccion = ?, contrasena = ? WHERE correo = ? ";
      db.query(
        sql,
        [user.nombres, user.direccion, user.contrasena, user.correo],
        (err, res) => {
          if (err) {
            result(err, null);
          } else {
            result(null, {
              message: "datos del usuario actualizados" + res.showdata,
            });
          }
        }
      );
    }
  });
};

module.exports = User;
