const User = require("../model/usuariosModelo");

module.exports = {
  buscarUsuario(req, res) {
    const user = req.body; //Datos del usuario desde el front-end
    User.login(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar el usuario",
          error: err,
        });
      }

      reg = {};
      console.log("Controller Usuario encontrado: ", data.length); //for debugging
      if (data.length > 0) {
        reg = {
          id: data[0].id_cliente,
          nombre: data[0].nombre,
        };
      }

      return res.status(201).json({
        success: true,
        message: "Usuario encontrado:" + data.length,
        cant: data.length,
        user: reg, //Datos desde Model
      });
    });
  },

  registrar(req, res) {
    const user = req.body; //Datos del usuario desde el front-end
    console.log("paso 1: ", user); //PROVISIONAL
    User.registrar(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al registrar el usuario",
          error: err,
        });
      }
      console.log("Usuario registrado: ", data); //for debugging
      return res.status(201).json({
        success: true,
        message: "Usuario registrado",
        data: data, //Datos desde Model
      });
    });
  },

  revisarActualizar(req, res) {
    const user = req.body; //Datos del usuario desde el front-end
    console.log("paso 1 del actualizar: ", user); //PROVISIONAL
    User.revisarActualizar(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al actualizar los datos",
          error: err,
        });
      }
      return res.status(201).json({
        success: true,
        message: "Datos cambiados",
        data: data, //Datos desde Model
      });
    });
  },
};
