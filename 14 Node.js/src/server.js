const http = require('http');

const server = http.createServer((request, response) => {

    // [request] - contains all HTTP request data
    // [response] - contains HTTP response data

    switch (request.method) {
        case "GET":
            response.statusCode = 200; // OK
            response.setHeader('Content-Type', 'text/plain');
            response.end("Hello from GET case!");
            break;

        case "POST":
            response.statusCode = 200; // OK
            response.setHeader('Content-Type', 'text/plain');
            response.end("Hello from POST case!");
            break;
        default:
            break;
    }
});

const ip = "127.0.0.1"; // localhost
const port = 4400; // recommend to use: 1024-65XXX

server.listen(port, ip, () => {
    console.log("Server started!");
});