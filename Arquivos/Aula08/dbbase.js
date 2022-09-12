const conectar = async() =>{

    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao

    const mysql= require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:@localhost:3306/cadastro")
    console.log('conectado')

    global.conexao=con
    return con
}

const todosClientes = async () => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM Bolsas')
    return await linhas 
}

const insereClientes = async (cliente) => {
    const con = await conectar()
    const sql=  'INSERT INTO Bolsas(Codigo, Nome, Tamanho) VALUES(?,?,?)'
    const valores = [cliente.Codigo,cliente.Nome,cliente.Tamanho]
    await con.query(sql,valores)
    
}

module.exports = {todosClientes, insereClientes}