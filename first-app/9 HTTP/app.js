const http = require('http');

const server = http.createServer((reg, res) => {
    if (require.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (require.url === '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
// this server is also event emitter and has access to all its methos
// as inherits from net.Server which is EventEmitter

server.listen(3000);

console.log('Listening on port 3000...');