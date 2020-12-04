const connection = require("../config/connection");

function ObtenerLibros(req, res){
    if(connection){
        let sql = 'select * from libros';
        connection.query(sql, (err, libros) => {
            if(err){
                res.send(err);
            } 
            else{
                console.log(libros);
                res.json(libros);
            }
        })
    }
}

function Agregarlibro (req, res){
    if(connection){
        const libro = req.body;

        if(libro.añopublicacion && libro.añopublicacion.length !== 4){
            return res.status(400).send({error: true, mensaje: "La longitud del Año de Publicación debe ser de 4 digitos."})
        }
       
        let sql = 'INSERT into libros set ?';
        connection.query(sql, [libro], (err, rows) =>{
            if(err){
                res.json(err);
            } 
            else{
                res.json({error: false, data: rows, mensaje: "¡Libro Agregado Exitosamente!"});
            }
        })
    }
}

module.exports = {
    ObtenerLibros,
    Agregarlibro
}