var http = require('http');
var url = require('url');
var server = http.createServer((request, response) =>{
	var parsedUrl = url.parse(request.url, true);
  	var queryAsObject = parsedUrl.query;
  	console.log(JSON.stringify(queryAsObject));
  	response.end(response);
});

var response = true;


// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");