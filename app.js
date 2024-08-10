const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url)
    console.log(req.headers)
    console.log(req.method)
    
});

server.listen(3000);