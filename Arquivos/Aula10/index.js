const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

//config
//Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//BodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// rotas

/* app.get("/", function(req,res){
            res.sendFile(__dirname +"/html/index.html")

        })
        */

app.get("/", function (req, res) {
  Post.findAll({ order: [["id", "DESC"]] }).then(function (posts) {
    res.render("home", { posts: posts });
  });
});

app.get("/Sobre", function (req, res) {
  res.send("Sobre Mim");
});

app.get("/Sobre", function (req, res) {
  res.send("Fale Conosco");
});

app.get("/cad", function (req, res) {
  res.render("formularios");
});

app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Houve um erro:" + erro);
    });
});

app.get("/deletar/:id", function (req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function () {
      res.send("Postagem deletada com sucesso");
    })
    .catch(function (erro) {
      res.send("Esta postagem nao existe");
    });
});

/*parametros pela url*/

app.get("/ola/:cargo/:nome/:cor", function (req, res) {
  res.send("<h1> Ola" + req.params.nome + "</h1>");
});

console.log("servidor rodando");

app.listen(9091);
