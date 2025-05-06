const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/dados') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'application/json' });
            res.end(JSON.stringify({mensagem: 'Dados recebidos', dados: body }));
        });
    }
});

server.listen(3000, ()=> {
    console.log('Servidor em http:localhost:3000/dados');
});