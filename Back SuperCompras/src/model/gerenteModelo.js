const db = require("../config/config");

const Gerente = {};

Gerente.consultarCantidadOrdenes = (pedido, result) => {
  const sql =
    "SELECT * FROM productos_pedidos WHERE codEstado = 3 AND codPedido = ?";

  db.query(
    sql,
    [pedido.codEstado, pedido.codPedido],

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

Gerente.consultarOrdenesCompletadas = (pedido, result) => {
  const sql =
    "SELECT * FROM productos_pedidos WHERE codEstado = 3 AND codPedido = ?";

  db.query(
    sql,
    [pedido.codEstado, pedido.codPedido],

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

Gerente.consultarOrdenesNoCompletadas = (pedido, result) => {
  const sql =
    "SELECT * FROM productos_pedidos WHERE codEstado = 3 AND codPedido = ?";

  db.query(
    sql,
    [pedido.codEstado, pedido.codPedido],

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
module.exports = Gerente;
