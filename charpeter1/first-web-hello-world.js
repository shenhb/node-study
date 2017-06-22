var http = require('http');

const responseContent = 'Hello World!\n',
    port = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(responseContent);

}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');