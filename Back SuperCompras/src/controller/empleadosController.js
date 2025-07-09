const Empleado = require("../model/empleadosModelo");

module.exports = {
  verPedidosBodega(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    Empleado.verPedidosBodega(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar pedidos",
          error: err,
        });
      }

      reg = {};
      console.log("Controller Pedidos encontrado:  ", data.length); //for debugging
      if (data.length > 0) {
        reg = {
          cantidadProducto: data[0].cantidadProducto,
          codProducto: data[0].codProducto,
          precioTotal: data[0].precioTotal,
          nombreProducto: data[0].nombreProducto,
          tipoEntrega: data[0].tipoEntrega,
          id: data[0].codPedido
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

  verPedidosEntrega(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    Empleado.verPedidosEntrega(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar pedidos",
          error: err,
        });
      }

      reg = {};
      console.log("Controller Pedidos encontrado:  ", data.length); //for debugging
      if (data.length > 0) {
        reg = {
          cantidadProducto: data[0].cantidadProducto,
          codProducto: data[0].codProducto,
          precioTotal: data[0].precioTotal,
          nombreProducto: data[0].nombreProducto,
          tipoEntrega: data[0].tipoEntrega,
          id: data[0].codPedido
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

  mandarParaEntrega(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    Empleado.mandarParaEntrega(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar pedidos",
          error: err,
        });
      }

      reg = {};
      console.log("Pedido a Entrega:  ", data.length); //for debugging
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
        message: "Pedido a entrega:" + data.length,
        cant: data.length,
        user: reg, //Datos desde Model
      });
    });
  },

  entregarPedido(req, res) {
    const pedido = req.body; //Datos del usuario desde el front-end
    Empleado.entregarPedido(pedido, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al consultar pedidos",
          error: err,
        });
      }

      reg = {};
      console.log("Pedido entregado:  ", data.length); //for debugging
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
        message: "Pedido entregado:" + data.length,
        cant: data.length,
        user: reg, //Datos desde Model
      });
    });
  },
};
