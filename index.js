const express = require("express");
const app = express();
// a biblioteca body-parser tem a finalidade de pegar os dados de uma requisição
// http e converter para outros tipos como json
const bodyParser = require("body-parser");

const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));
// esta função tem a finalidade de manipular dados vindo de um fomulário codificado
// em url e o objeto impede que dados complexo trafeguem por ele
app.use(bodyParser.urlencoded({ extended: false }));
// Permite manipular dados no formato json
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/perguntas", (req, res) => {
    res.render('perguntas')
})

app.post("/salvarPergunta", (req, res) => {
    // apos o cliente enviar os dados eles serão capturados pelo bodyParser
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send();
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})
