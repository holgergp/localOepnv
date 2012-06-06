// Unit Tests
// Akzeptanztests
// Mehr Kommentare
// Problem mit dem Verzeichnis node_modules => npm install legt ein node_modules verzeichnis in . an
// Variable Zeitparameter
// Vielleicht 'prototypischer' bauen => siehe todos
// Umbauen auf express
// Templating
// Geolocation
// Einpflegen des VRR
// bessere Benamung




// Load the http module to create an http server.
var http = require('http');

var Location = require('./core/location');
var connection = require('./verkehrsmittelvergleich.de/connection');

console.log("Start");




var server = http.createServer(function (request, response) {
  	response.writeHead(200, {"Content-Type": "text/html"});
  	//var result='';
  	
  	//var client = http.createClient(80, 'www.verkehrsmittelvergleich.de');
	
	var responseCallback= function (result){
		response.end(result);
	}

	connection.getResponseData([
		Location.FUERSTENPLATZ,
		Location.FRIEDRICHSTADT,
		Location.HELMHOLTZSTRASSE,
		Location.MORSESTRASSE],
		
		responseCallback);


});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(function () {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
  else {	
  	console.log(e);
  }
});

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


