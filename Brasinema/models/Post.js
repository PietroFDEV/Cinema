//Requerindo o arquivo do banco
const db = require('./db')
subQuery: false

//Salvando as informações do form
const Post = db.connection.define('ingressos', {
    sessaoId: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.TEXT
    },
    cpf: {
        type: db.Sequelize.TEXT
    },
    email: {
        type: db.Sequelize.TEXT
    },

})

module.exports = Post