const Producto = require("../model/productosModelo");

module.exports = {
  consultarProductos(req, res) {
    const producto = req.body;
    console.log("paso 1: productos"); //PROVISIONAL
    Producto.consultarProductos(producto, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al traer un producto",
          error: err,
        });
      }
      console.log("Productos en cliente: "); //for debugging
      return res.status(201).json({
        success: true,
        message: "Productos en cliente",
        data: data, //Datos desde Model
      });
    });
  },

  consultarOfertas(req, res) {
    const producto = req.body;
    console.log("paso 1: Ofertas"); //PROVISIONAL
    Producto.consultarOfertas(producto, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al traer una oferta",
          error: err,
        });
      }
      console.log("Ofertas en cliente: "); //for debugging
      return res.status(201).json({
        success: true,
        message: "Ofertas en cliente",
        data: data, //Datos desde Model
      });
    });
  },

  consultarProductoNombre(req, res) {
    const producto = req.body;
    console.log("paso 1: Producto-nombre"); //PROVISIONAL
    Producto.consultarDetallesProducto(producto, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Error al traer los detalles de un producto",
          error: err,
        });
      }
      console.log("Ofertas en cliente: "); //for debugging
      return res.status(201).json({
        success: true,
        message: "Detalle del producto en cliente",
        data: data, //Datos desde Model
      });
    });
  },
};
