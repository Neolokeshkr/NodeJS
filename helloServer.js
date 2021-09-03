// including http module
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000;
process.env.NODE_ENV = "development"

// createServer() method of http creates a server and returns it.
/*
Whenever a new request is received, the request event is called,
providing two objects: a request (an http.IncomingMessage object)
and a response (an http.ServerResponse object).
*/

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    //console.log(process);
    console.log(process.env);
    // console.log(process.env.NODE_ENV);
})