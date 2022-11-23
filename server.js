//exportando modulos
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

//criando servidor
const server = http.createServer(app);
server.listen(port);