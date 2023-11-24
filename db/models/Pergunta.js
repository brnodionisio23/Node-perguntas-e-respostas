// fazemos a requisição dos modulos sequelize e db para realizar a conexão com
// o banco utilizado
const Sequelize = require('sequelize');
const { connection, porta, banco } = require('../db');

// definimos a tabela no banco
const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT
    }
});

// sincronizamos com o banco e se a tabela ja existir, não recriar
Pergunta.sync({ force: false })
    .then(() => { })
    .catch((err) => {
        console.log(err)
    });



