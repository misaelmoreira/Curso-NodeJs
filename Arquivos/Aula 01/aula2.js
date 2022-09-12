const http = require("http");
const url = require("url");
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });

  response.write(require.url);

  response.end();
});

servidor.listen(porta, () => {
  console.log("Servidor Rodando");
});
