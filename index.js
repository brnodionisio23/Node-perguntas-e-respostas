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
    // com o objeto order podemos definir a ordem de posionamento dos elementos
    // no caso utilizando a coluna id do maior para o menor (do mais novo ao mais antigo)
    perguntaModel.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    })
})

app.get("/perguntas", (req, res) => {
    res.render('perguntas')
})

app.post("/salvarPergunta", (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    })
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})
