create database crud_node1;

use crud_node1;

create table personas(
    id int not null auto_increment,
    nombre varchar(50) not null,
    direccion varchar(150),
    telefono varchar(10),
    primary key(id)
)

select * from personas;

insert into personas(nombre,direccion,telefono) values("Daniel","Tec De Culiacán", "6677283091");