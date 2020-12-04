const express = require('express');
const cors = require('cors');

//Inicializar Express
const app = express();
app.use(cors());

//Configuraciones
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Base de datos
require("./config/connection");

//Ruta
app.use(require('./Routes/LibrosRoute'))


//Levantar el servidor
app.listen(app.get('port'), (error) => {
    if(error){
        console.log('Ha ocurrido un error: ' , error);

    } else {
        console.log('Servidor en puerto: ' , app.get('port'));
    }
}
)