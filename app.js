const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 4000;

var files = { "/index.html" : [fs.readFileSync("index.html", "utf8"), "text/html"]};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});