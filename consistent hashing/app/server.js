var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Instance id '+ process.env.INSTANCE_ID);
};
var www = http.createServer(handleRequest);
www.listen(8080);