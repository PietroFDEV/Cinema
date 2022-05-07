const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbcinema', 'root', '12345', {
    host: "localhost",
<<<<<<< Updated upstream
    dialect: 'mysql',
=======
    user: "root",
    password: "Pipoca0123",
    database: "dbcinema",
>>>>>>> Stashed changes
    define: {
        "timestamps": false
    }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

sequelize.authenticate()
.then(() => {
    console.log("Conectado ao MySQL com sucesso!")
}).catch(() => {
    console.log("Falha ao se conectar ao MySQL")
})