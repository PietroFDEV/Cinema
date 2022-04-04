const db = require('./db')
subQuery: false

const Post = db.sequelize.define('ingressos', {
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