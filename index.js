const http = require('http');
const quotes = require('./data/quotes.json');
const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/random-quote') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const random = Math.floor(Math.random() * quotes.length);
    res.end(`<h1>${quotes[random]}</h1>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found!</h1><p>Try visiting /random-quote</p>');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
