const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the Content-Type header, the response might be handled incorrectly by the client.
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});