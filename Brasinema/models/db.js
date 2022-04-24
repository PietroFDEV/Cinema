//Requerindo o Sequelize
const mysql = require('mysql')

//Conectando ao mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "dbcinema",
    define: {
        "timestamps": false
    }
})

//Verificação se conectou
/*
connection.authenticate()
.then(() => {
    console.log("Conectado ao MySQL com sucesso!")
}).catch(() => {
    console.log("Falha ao se conectar ao MySQL")
})
*/

global.db = connection;

//Exportando o modulo
module.exports = {
    connection,
}