const http = require("http");

const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  if (request.url == "/") {
    response.write("<h1>Seja bem vindo</h1>");
  } else if (request.url == "/canal") {
    response.write("Bem vindo ao Canal");
  } else if (request.url == "/curso") {
    response.write("Bem vindo ao Curso");
  }
  response.end();
});

servidor.listen(porta, host, () => {
  console.log("Servidor Rodando");
});
