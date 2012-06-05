// TODO Modularisieren!!!!
// Variable Zeitparameter
// Meherer Haltestellen
// Vielleicht 'prototypischer' bauen
// Dependecies formulieren
// Umbauen auf express
// StringUtilities?



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

	connection.getResponseData([Location.FUERSTENPLATZ,Location.FRIEDRICHSTADT,Location.HELMHOLTZSTRASSE,Location.MORSESTRASSE],responseCallback);

// 	var restRequest=client.request("GET","/fahrplan/fuerstenplatz-duesseldorf/2012-06-03/18:00");
// 	restRequest.end();
// 	
// 	restRequest.on("response", function (resp) {
// 		console.log("Connected");
// 		resp.on('data', function (data) {
// 			
// 			result+=data;
// 
// 	 	});
// 	 	resp.on('end' ,function(){
// 	 		console.log("Completed Request");
// 	 		response.end("<html><header>"+googleCssLocation+cssLocation+"</header><body>"+jqueryResult+"</body></html>");
// 	 	});
// 	 	
// 	 	
// 	});
// 	restRequest.on('error',function(e){
// 	  console.log(e);
// 	});
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


