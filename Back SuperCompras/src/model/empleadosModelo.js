const db = require("../config/config");

const Empleado = {};

/*
Estados de los productos en la db
1 = En proceso
2 = Confirmado
3 = Pendiente para alistar
4 = Pendiente para entregar
5 = Entregado
6 = Cancelado
*/ 

Empleado.verPedidosBodega = (pedido, result) => {
  const sql = `
    SELECT PP.cantidadProducto, PP.codProducto, P.nombreProducto, PD.precioTotal, ME.tipoEntrega
    FROM productos_pedidos AS PP
    JOIN productos AS P ON PP.codProducto = P.codProducto
    JOIN pedidos AS PD ON PD.codPedido = PP.codPedido
    JOIN metodos_entrega AS ME ON ME.codEntrega = PD.codEntrega
    WHERE PD.codEstado = 3;
  `;

  db.query(
    sql,
    [],

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

Empleado.verPedidosEntrega = (pedido, result) => {
  const sql = `
    SELECT PP.cantidadProducto, PP.codProducto, P.nombreProducto, PD.precioTotal, ME.tipoEntrega
    FROM productos_pedidos AS PP
    JOIN productos AS P ON PP.codProducto = P.codProducto
    JOIN pedidos AS PD ON PD.codPedido = PP.codPedido
    JOIN metodos_entrega AS ME ON ME.codEntrega = PD.codEntrega
    WHERE PD.codEstado = 4;`;

  db.query(
    sql,
    [],

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

Empleado.mandarParaEntrega = (pedido, result) => {
  const sql = "SELECT * FROM Pedidos WHERE codPedido = ?";
  db.query(sql, [pedido.codPedido], (err, res) => {
    if (err) {
      console.log("error aqui");
      result(err, null);
    } else {
      console.log("datos revisados");
      const sql = "UPDATE Pedidos SET codEstado = 5 WHERE codPedido = ?";
      db.query(sql, [pedido.codPedido], (err, res) => {
        if (err) {
          result(err, null);
        } else {
          result(null, {
            message: "Estado del pedido Actualizados" + res.showdata,
          });
        }
      });
    }
  });
};

Empleado.entregarPedido = (pedido, result) => {
  const sql = "SELECT * FROM Pedidos WHERE codPedido = ? AND codEstado = 4";
  db.query(sql, [pedido.codPedido], (err, res) => {
    if (err) {
      console.log("error aqui");
      result(err, null);
    } else {
      console.log("datos revisados");
      const sql = "UPDATE Pedidos SET codEstado = 5 WHERE codPedido = ?";
      db.query(sql, [pedido.codEstado, pedido.codPedido], (err, res) => {
        if (err) {
          result(err, null);
        } else {
          result(null, {
            message: "Estado del pedido Actualizados" + res.showdata,
          });
        }
      });
    }
  });
};

module.exports = Empleado;
