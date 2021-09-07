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
console.time(server);
const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})
console.timeEnd(server);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    //console.log(process);
    //console.log(process.env);
    // console.log(process.env.NODE_ENV);
})

console.log(process.env.USER_ID);

process.argv.forEach((val, index) => {
   console.log(`${index}: ${val}`)
})

//const args2 = require('minimist')(process.args.slice(2));

process.on('SIGTERM', ()=>{
	server.close(()=>{
		console.log("Process terminated");
	});
});
