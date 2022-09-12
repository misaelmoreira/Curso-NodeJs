const Sequelize = require("sequelize");

//Conexao com o banco de dados mysql

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

/*  sequelize.authenticate().then(function (){
            console.log("Conectado com sucesso!")
        }).catch(function(erro){
            console.log("Falha ao se conectar")
        })
        */
