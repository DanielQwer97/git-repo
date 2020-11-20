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

function crear (req, res){
    if(connection){
        const persona = req.body;

        if(!persona.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"})
        }

        let sql = 'INSERT into personas set ?';
        connection.query(sql, [persona], (err, rows) =>{
            if(err){
                res.json(err);
            } else{
                res.json({error: false, data: rows, mensaje: "Persona Creada Con Éxito"});
            }
        })
    }
}

function editar (req, res){
    if(connection){
        const { id } = req.params;
        const persona = req.body;
        let sql = 'UPDATE personas set ? where id = ?';
        connection.query(sql, [persona, id], (err, rows) =>{
            if(err){
                res.json(err);
            } else{
                let mensaje="";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else{
                    mensaje = "Persona Modficada Con Éxito"
                }
                res.json({error: false, data: rows, mensaje: mensaje});
            }
        })
    }
}

function eliminar (req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE personas where id = ?';
        connection.query(sql, [id], (err, rows) =>{
            if(err){
                res.json(err);
            } else{
                let mensaje = "";
                if(rows.affectedRows === 0)
                   mensaje = "Persona no encontrada"
                else
                   mensaje = "Persona Eliminada Con Éxito";
                res.json({error: false, data: rows, mensaje });
            }
        })
    }
}

module.exports = {
    listarpersonas,
    obtenerpersonasindv,
    crear,
    editar,
    eliminar
}