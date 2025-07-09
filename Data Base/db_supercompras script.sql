CREATE DATABASE DB_SUPERCOMPRAS;

USE DB_SUPERCOMPRAS;

CREATE TABLE Roles_Usuario(
codRol CHAR(5) PRIMARY KEY,
nombreRol VARCHAR(15) 
);

CREATE TABLE Metodos_Pago(
codPago CHAR(6) PRIMARY KEY,
nombrePago VARCHAR(8) 
);

CREATE TABLE  Metodos_Entrega(
codEntrega CHAR(6) PRIMARY KEY,
nombreEntrega VARCHAR(9)
);

CREATE TABLE Estados_Pedidos(
codEstado CHAR(5) PRIMARY KEY,
nombreEstado varchar(11)
);

CREATE TABLE Usuarios(
codUsuario int auto_increment PRIMARY KEY,
nombres VARCHAR(15),
correo VARCHAR(50),
contrasena VARCHAR(50),
direccion VARCHAR(30),

codRol CHAR(5),

FOREIGN KEY (codRol) REFERENCES Roles_Usuario(codRol)
);

CREATE TABLE Productos(
codProducto INT auto_increment PRIMARY KEY,
nombreProducto VARCHAR(25),
precio INT,
descuento CHAR(2)
);

CREATE TABLE Pedidos(
codPedido INT auto_increment PRIMARY KEY,
precioTotal INT,

codPago CHAR(6),
codEntrega CHAR(6),
codUsuario INT,
codEstado CHAR(5),

FOREIGN KEY (codPago) REFERENCES Metodos_Pago(codPago),
FOREIGN KEY (codEntrega) REFERENCES Metodos_Entrega(codEntrega),
FOREIGN KEY (codUsuario) REFERENCES Usuarios(codUsuario),
FOREIGN KEY (codEstado) REFERENCES Estados_Pedidos(codEstado)
);

CREATE TABLE Productos_pedidos(
cantidadProd INT,

codProducto INT,
codPedido INT,
precio INT,

FOREIGN KEY (codProducto) REFERENCES Productos(codProducto),
FOREIGN KEY (codPedido) REFERENCES Pedidos(codPedido)
);

