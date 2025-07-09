const db = require("../config/config");

const Producto = {};

Producto.consultarProductos = (err, result) => {
  db.query("SELECT * FROM productos", (err, res) => {
    if (err) {
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

Producto.consultarOfertas = (err, result) => {
  db.query("Select * FROM productos WHERE descuento > 0", (err, res) => {
    if (err) {
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

Producto.consultarDetallesProducto = (producto, result) => {
  const sql = "Select * FROM productos WHERE codProducto = ?";
  db.query(sql, [producto.codProducto], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

module.exports = Producto;
