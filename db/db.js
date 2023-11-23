// Sequelize e uma ferramenta de ORM, aqui realizamos a conexão com o banco de dados
// e após isso exportamos ela.
const Sequelize = require('sequelize');
const porta = 3006;
const banco = 'perguntaserepostas';

const connection = new Sequelize(banco, 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    connection: connection,
    porta: porta,
    banco: banco
};