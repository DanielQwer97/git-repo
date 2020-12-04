create database Examen_node1;

use Examen_node1;

create table libros(
    id int not null auto_increment,
    titulo varchar(80) not null,
    autor varchar(100),
    numeroPagina numeric(4) null,
    añopublicacion numeric(4) null,
    primary key(id)
)