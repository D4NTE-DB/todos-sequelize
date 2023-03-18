const express = require('express');
const db = require("./utils/database")
const ToDo = require('./models/users.models')
const todoRoutes = require('./routes/user.routes')
const cors = require('cors')



const PORT = 8000;

const app = express();

app.use(cors())
app.use(express.json())

app.use(todoRoutes)

db.authenticate()
    .then(() => {
        console.log('Conexion a base de datos')
    })
    .catch(() => {
        console.log(error);
    })

db.sync()
    .then(() => {
        console.log('Synchronized   DB')
    })
    .catch((error) => {
        console.log(error)
    });



app.get('/', (req, res) => {
    res.send('Bienvenidos a mi servidor')
});

app.listen(PORT, () => {
    console.log(`Servidor en linea desde el puerto: ${PORT}`)
})