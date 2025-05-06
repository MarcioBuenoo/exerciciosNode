const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Contente-Type': 'text/html' });
        res.end('<h1>Página Inicial</h1>');
    } else if (req.url === '/sobre') {
        res.writeHead(200, {'Content-Type': 'text/html' });
        res.end('<h1>Sobre nós</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html' });
        res.end('<h1>Página não encontrada</h1>');
    }
});

server.listen(3000);