// TODO Modularisieren!!!!
// Variable Zeitparameter
// Meherer Haltestellen
// Vielleicht 'prototypischer' bauen
// Dependecies formulieren
//UMbauen auf express
// StringUtilities?



// Load the http module to create an http server.
var http = require('http');

var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("../lib/jquery-1.7.2.min.js").toString();
var _s = require('underscore.string');


// var optionsFuerstenplatz = {
//     host: 'www.verkehrsmittelvergleich.de',
//     port: 80,
//     path: '/fahrplan/fuerstenplatz-duesseldorf/2012-06-03/18:00',
//     method: 'GET',
//     headers: {
//         contentType: 'text/html'
//     }
// };

console.log("Start");


//Build a string like '18:00'
var buildTimeParameter = function(){
	//Fülle nullen auf
	var d=new Date();
	return fillZeros(d.getHours())+fillZeros(d.getMinutes());
}

//build a string like 2012-06-03
var buildDateParameter = function(){
	//Fülle nullen auf
	var d=new Date();
	console.log('Date: '+d.getDate());
	return d.getFullYear()+'-'+fillZeros(getReadableMonth(d))+'-'+fillZeros(d.getDate());
}

// Konvertiere eine Nummer in einen String und füge eine Null an den Anfang falls die Stringlaenge <2 ist
// Beispiel: 6=> '06'
var fillZeros = function(number) {
	return paddedString=_s.pad(number,2,"0");
}

var buildTargetAdress=function(){
	var targetAdress='http://www.verkehrsmittelvergleich.de/fahrplan/fuerstenplatz-duesseldorf/'+buildDateParameter()+'/'+buildTimeParameter();
	console.log(targetAdress);
	return targetAdress
}

// Eigentlich nur Month +1
var getReadableMonth = function(dateObject){
	var readableMonth=dateObject.getMonth()+1
	console.log('Readable Month '+readableMonth);
	return readableMonth;
}

var getHeaderString = function(){
	var headerString="";
	headerString+="<header>";
	var cssLocation='<link href="css/localverkehrsmittelvergleich.css" media="screen" rel="stylesheet" type="text/css" />';
	var googleCssLocation='<link href="css/jquery-ui.css" media="screen" rel="stylesheet" type="text/css" />';
	headerString+=cssLocation;
	headerString+=googleCssLocation;
	headerString+='<meta charset="utf-8">';
	headerString+="</header>"
	return headerString;
};

var getHtmlString= function (body){
	var htmlString="";
	htmlString+="<html>";
	htmlString=getHeaderString();
	htmlString+="<body>";
	htmlString+=body;
	htmlString+="</body>"
	htmlString+="</html>";
	return htmlString;
};



var server = http.createServer(function (request, response) {
  	response.writeHead(200, {"Content-Type": "text/html"});
  	//var result='';
  	
  	//var client = http.createClient(80, 'www.verkehrsmittelvergleich.de');
	
	
	
	//http://liamkaufman.com/blog/2012/03/08/scraping-web-pages-with-jquery-nodejs-and-jsdom/
	var getPublicTransportData=function(retries) {
		if(retries === 3){
   			return;
  		}else if (retries === undefined){
    		retries = 0;
  		}
		jsdom.env({
			html: buildTargetAdress() ,
			src: [
				jquery
			],
			done: function(errors, window) {
				if(errors){
					return getPublicTransportData(retries + 1);
				}
				console.log("Finishing ...");
				var $ = window.$;
				var jqueryResult=$(".board").parent().html();
				response.end(getHtmlString(jqueryResult));
				
			}
		});
	}.apply();
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


