
const http = require('http');
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello, World   test!\n');
});

server.listen(3000, () => {
 console.log(`Server running at port 3000`);
});

// test tesy