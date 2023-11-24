const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connection, porta, banco } = require("./db/db");
const perguntaModel = require('./db/models/Pergunta');

const port = 8080;

connection.authenticate()
    .then(() => {
        console.log(`Conectado com sucesso ao banco: ${banco}, na porta: ${porta}`);
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/perguntas", (req, res) => {
    res.render('perguntas')
})

app.post("/salvarPergunta", (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    // o metodo create tem a função de criar uma nova linha na tabela do db
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})
