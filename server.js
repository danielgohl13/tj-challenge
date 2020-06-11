const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));

//requisição parseamento content-type da application/json
app.use(bodyParser.json());

//requisição de parseamento do Content-type (diz o tipo de midia que o client recebe)
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync database.");
  });
  
//rota '/'
app.get("/", (req, res) => {
    res.json({ message: "Teste 1"});
});

//portas definidas esperando requisições
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server rodando na porta ${PORT}.');
});