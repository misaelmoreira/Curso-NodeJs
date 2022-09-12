const conecte = function () {
  (async () => {
    const db = require("./db");

    /*
    console.log('Insira os clientes')
    await db.insereClientes({Codigo:'4',Nome: "Bolsa Chanel",Tamanho: 'G'})
    */

    console.log("Obter todos o clientes");
    const clientes = await db.todosClientes();
    console.log(clientes);
  })();
};
