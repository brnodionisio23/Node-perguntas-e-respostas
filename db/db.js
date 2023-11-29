const Sequelize = require('sequelize');
const porta = 3006;
const banco = 'perguntaserepostas';

const connection = new Sequelize(banco, 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = {
    connection: connection,
    porta: porta,
    banco: banco
};