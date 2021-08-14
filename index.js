const http = require('http');
const quotes = require('./data/quotes.json');
const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/random-quote' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const randomNum = Math.floor(Math.random() * quotes.length);
    res.end(JSON.stringify({ quote: quotes[randomNum] }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    const errorResponse = { message: 'Not Found!' };
    res.end(JSON.stringify(errorResponse));
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
