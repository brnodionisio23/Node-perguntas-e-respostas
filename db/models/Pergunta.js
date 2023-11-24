const Sequelize = require('sequelize');
const { connection, porta, banco } = require('../db');

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT
    }
});

Pergunta.sync({ force: false })
    .then(() => { })
    .catch((err) => {
        console.log(err)
    });


// exportando o model para outros serviços utilizar
module.exports = Pergunta;



