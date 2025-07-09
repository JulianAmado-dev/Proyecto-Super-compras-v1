const Pedido = require("../model/pedidosModelo");

module.exports = {
  consultarPedido(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    Pedido.consultarPedido(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar el usuario",
          error: err,
        });
      }

      reg = {};
      console.log("Controller Pedido encontrado:  ", data.length); //for debugging
      if (data.length > 0) {
        reg = {
          precioTotal: data[0].precioTotal,
          codPago: data[0].codPago,
          codEntrega: data[0].codEntrega,
          id: data[0].codPedido,
          estado: data[0].codEstado,
        };
      }

      return res.status(201).json({
        success: true,
        message: "Pedido encontrado:" + data.length,
        cant: data.length,
        user: reg, //Datos desde Model
      });
    });
  },
  crearPedido(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    console.log("paso 1: ", pedido); //PROVISIONAL
    Pedido.crearPedido(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al crear un pedido",
          error: err,
        });
      }
      console.log("Pedido creado: ", data); //for debugging
      return res.status(201).json({
        success: true,
        message: "Pedido creado",
        data: data, //Datos desde Model
      });
    });
  },
  agregarProducto(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    console.log("paso 1: para agregar producto", pedido); //PROVISIONAL
    Pedido.agregarProducto(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al agregar un producto",
          error: err,
        });
      }
      console.log("Pedido creado: ", data); //for debugging
      return res.status(201).json({
        success: true,
        message: "Producto agregado",
        data: data, //Datos desde Model
      });
    });
  },
  confirmarPedido(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    console.log("paso 1: para agregar producto", pedido); //PROVISIONAL
    Pedido.confirmarPedido(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al confirmar Pedido",
          error: err,
        });
      }
      console.log("Pedido confirmado: ", data); //for debugging
      return res.status(201).json({
        success: true,
        message: "Pedido confirmado",
        data: data, //Datos desde Model
      });
    });
  },
};
