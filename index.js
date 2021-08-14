const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => { })

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})