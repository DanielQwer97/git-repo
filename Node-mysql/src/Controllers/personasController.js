const connection = require("../config/connection");

function listarpersonas(req, res){
    if(connection){
        let sql = 'select * from personas';
        connection.query(sql, (err, personas) => {
            if(err){
                res.send(err);
            } else{
                console.log(personas);
                res.json(personas);
            }

        })
    }

}

function obtenerpersonasindv (req, res){
    if(connection){
        const { id } = req.params;
        let sql = `select * from personas where id = ${connection.escape(id)}`;
        connection.query(sql , (err, persona) => {
            if(err){
                res.send(err);
            } else{
                let mensaje = "";
                if(persona === undefined || persona.length === 0)
                mensaje = "Persona no encontrada";
                
                res.json({error: false, data: persona, mensaje: mensaje});
            }
        })
    }
}

module.exports = {
    listarpersonas,
    obtenerpersonasindv
}