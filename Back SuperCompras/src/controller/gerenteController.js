const Gerente = require("../model/gerenteModelo");

module.exports = {
  consultarCantidadOrdenes(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    Gerente.consultarCantidadOrdenes(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar pedidos",
          error: err,
        });
      }

      reg = {};
      console.log("Controller Cantidad Ordenes encontrado:  ", data.length); //for debugging


      return res.status(201).json({
        success: true,
        message: "Pedido encontrado:" + data.length,
        cant: data.length,
        user: reg, //Datos desde Model
      });
    });
  },
  consultarOrdenesCompletadas(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    gerente.consultarOrdenesCompletadas(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar pedidos",
          error: err,
        });
      }

      reg = {};
      console.log("Controller Ordenes completadas encontrado:  ", data.length); //for debugging

      return res.status(201).json({
        success: true,
        message: "Pedido encontrado:" + data.length,
        cant: data.length,
        user: reg, //Datos desde Model

    

      });
    });
  },
  consultarOrdenesNoCompletadas(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    Gerente.consultarOrdenesNoCompletadas(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar pedidos",
          error: err,
        });
      }

      reg = {};
      console.log("Controller Ordenes No completadas encontrado:  ", data.length); //for debugging

      return res.status(201).json({
        success: true,
        message: "Pedido encontrado:" + data.length,
        cant: data.length,
        user: reg, //Datos desde Model
      });
    });
  },
};
