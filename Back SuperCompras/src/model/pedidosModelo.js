const db = require("../config/config");

const Pedido = {};

Pedido.consultarPedido = (pedido, result) => {
  const sql = "SELECT * FROM pedidos WHERE codUsuario = ?";

  db.query(
    sql,
    [pedido.codUsuario],

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

Pedido.crearPedido = (pedido, result) => {
  console.log("paso 2: ", pedido); //PROVISIONAL
  const sql =
    "INSERT INTO pedidos (codUsuario, precioTotal, codPago, codEntrega, codEstado) VALUES (?,?,?,?,1)";
  db.query(
    sql,
    [pedido.codUsuario, pedido.precioTotal, null, null],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        console.log("paso final, creacion de pedido: ");
        result(null, {
          message: "Pedido registrado: " + res.insertId,
        });
      }
    }
  );
};

Pedido.agregarProducto = (pedido, result) => {
  console.log("paso 2: ", pedido); //PROVISIONAL
  const sql =
    "INSERT INTO productos_pedidos (cantidadProducto, codProducto, codPedido, precio) VALUES (?,?,?,?)";
  db.query(
    sql,
    [pedido.cantidadProducto, pedido.codProducto, pedido.codPedido, pedido.precio],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        console.log("paso final, anexo del producto: ");
        result(null, {
          message: "Producto agregado: " + res.insertId,
        });
      }
    }
  );
};

Pedido.confirmarPedido = (pedido, result) => {
  const sql = "SELECT * FROM pedidos WHERE codUsuario = ? AND codPedido = ?";
  db.query(sql, [pedido.codUsuario, pedido.codPedido], (err, res) => {
    if (err) {
      console.log("error aqui");
      result(err, null);
    } else {
      console.log("datos revisados");
      const sql =
        "UPDATE pedidos SET precioTotal = ?, codPago = ?, codEntrega = ?, codEstado = ? WHERE codUsuario = ? AND codPedido = ?";
      db.query(
        sql,
        [
          pedido.precioTotal,
          pedido.codPago,
          pedido.codEntrega,
          pedido.codEstado,
          pedido.codUsuario,
          pedido.codPedido,
        ],
        (err, res) => {
          if (err) {
            result(err, null);
          } else {
            result(null, {
              message: "pedido de Usuario confirmado" + res.showdata,
            });
          }
        }
      );
    }
  });
};

module.exports = Pedido;

//se debe de hacer la logica para las claves de los empleados

//se debe de crear una tabla pivote para usuarios y pedidos, para que el usuario pueda tener varios pedidos al tiempo

//hay un error al enviar 1 en codEstado ya que no está definida en la base de datos

//el codigo usuario una de dos, o se ingresa en el json con el id del usuario (cómo lo obtiene? porque el usuario ya no envia ese dato)
// o lo tiene guardado desde antes y ya no se le envia

//aunque se inserten varios datos de la tabla pedidos en el db.query solo va user.codUsuario (?)
//el precio del pedido no se ha ingresado porque aún no hay productos (?)
