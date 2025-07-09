/**
 * Definicion de URLs para clientes
 * @module src/routes/clientRoutes
 * author:  Marco León Mora
 * date:    22/03/2024
 * version: 1.0
 */

const { Router } = require("express");
const router = Router(); //routes
const controller = require("./controller/usuariosController");
const productosController = require("./controller/productosController");
const pedidosController = require("./controller/pedidosController");
const empleadosController = require("./controller/empleadosController");

//usuario (no resgitrado) controller.register
router.post("/usuario/registrar", controller.registrar); //registrarse

//cliente (ya registrado)
router.post("/usuario", controller.buscarUsuario); //Login
router.patch("/usuario/cuenta", controller.revisarActualizar); //cambiar detalles de la cuenta
////Hay que implementar la verificación de credenciales de usuario
//////router.get("/usuario/listaCompras", controller.buscarListaCompras) //trae la lista de compras del usuario

//productos
router.get("/productos", productosController.consultarProductos); //trae los productos, desde la pantalla home
router.get("/productos/ofertas", productosController.consultarOfertas); //trae las ofertas, desde la pantalla home;

//detalles de un producto
router.post("/producto/nombre", productosController.consultarProductoNombre); //trae todos los datos de una producto especifico

//creación, consulta y anexo de productos para los pedidos de los Usuarios
router.get("/pedidos/consultar", pedidosController.consultarPedido); // consulta que pedidos hay en la db
router.post("/pedidos/crear", pedidosController.crearPedido); // el usuario crea un pedido al momento de agregar productos en el carrito
router.post("/pedidos/agregarProductos", pedidosController.agregarProducto); //agrega un producto al carrito
router.patch("/pedidos/confirmar", pedidosController.confirmarPedido); //confirma el pedido del cliente mandandolo a alistar por el personal de bodega

//empleado bodega
router.get("/empleado/bodega", empleadosController.verPedidosBodega); //mira los pedidos confirmados por los clientes
router.patch("/empleado/bodega/mandarParaEntrega", empleadosController.mandarParaEntrega); //manda los pedidos ya alistados al personal de entrega

//empleado entrega
router.get("/empleado/entrega", empleadosController.verPedidosEntrega); //mira los pedidos que tengan estado de pedida "pendientes para entregar"
router.patch("/empleado/entrega/entregarPedido", empleadosController.entregarPedido); //confirma el recibimiento del pedido y lo cambia de estado a entregado

//gerente
//router.get("/gerente", empleadosController.verInformesGerente); //mira los informes disponibles
//router.get("/gerente/descargar", empleadosController.descargarInforme); //mira los informes disponibles
/**
router.get("/usuario/compras", controller.verLista);//ver la lista de compras
router.get("/usuario/pagos", controller.verPagos);//ver los metodos de pago, ver los metodos de entrega y confirmar pedido



/**SELECT PP.cantidadProducto, PP.codProducto, P.nombreProducto, PD.precioTotal 
FROM productos_pedidos as PP
JOIN productos as P ON PP.codProducto = P.codProducto
JOIN pedidos as PD ON PD.codPedido = PP.codPedido; */


module.exports = router;
