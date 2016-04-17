// build a http server

'use strict';

// import http module
var http = require('http');

// create server
var server = http.createServer(function(request, response){
	
	console.log(request.method + ': ' + request.url);

	response.writeHead(404, {'Content-Type': 'text/html'});

	response.end('<h1>Hello Node</h1>');

});

// listen to port 18000
server.listen(18000);
console.log('Server is running at http://localhost:18000');