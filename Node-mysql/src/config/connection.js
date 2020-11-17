const mysql = require('mysql');


const objectconnection = {
    "host" : "LOCALHOST",
    "port" : 3306,
    "user" : "root",
    "password" : "root",
    "database" : "crud_node1"
}

const myConn = mysql.createConnection(objectconnection);


myConn.connect((error) => {
    if(error){
        console.log("Ha ocurrido un error" , error);
    } else{
        console.log("Base de datos conectada!");
    }
})

module.exports = myConn;