const  Sequelize  = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function (){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar")
})


/*
const Postagem = sequelize.define('postagens', {

    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Ola mundo",
    conteudo: "heloow world"
}) insere dados na tabela


const Usuario = sequelize.define('usuarios', {

    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "misael",
    sobrenome: "alberto",
    idade: "30",
    email: "misa@gmail.com"
})

Usuario.sync({force:true}) sincroniza os dados 

*/




