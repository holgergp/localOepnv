//Einiges an Helfertroutinen für den verkehrsmittelvergleich
//TODO noch sauberer konkrete Logik ausarbeiten. verkehrsmittelvergleich verwendet eine Rest API, also ...
// Ich brauche ein Objekt, dass den Zugriff auf den Rest Service kapselt
//Eigentlich ist das hier auch kein Utility, sondern das Fachobjekt => Umbauen
//Domain ist im jetzigen Zustand noch kein guter Name, das wird aber ;)
//Das statische größtenteils entfernen



var CoreUtility = require('../util/utility');
var Location = require('../core/location');

var BASE_URL='http://www.verkehrsmittelvergleich.de/fahrplan/';
//Todo Oder doch statisch definieren?
function Domain(){
}

//Build a string like '18:00'
var buildTimeParameter = function(){
	//Fülle nullen auf
	var d=new Date();
	return CoreUtility.fillZeros(d.getHours())+CoreUtility.fillZeros(d.getMinutes());
}

Domain.buildTimeParameter=buildDateParameter;

//build a string like 2012-06-03
var buildDateParameter = function(){
	//Fülle nullen auf
	var d=new Date();
	console.log('Date: '+d.getDate());
	return d.getFullYear()+'-'+CoreUtility.fillZeros(getReadableMonth(d))+'-'+CoreUtility.fillZeros(d.getDate());
}

Domain.buildDateParameter=buildDateParameter;

var translateLocation=function(location){
	switch(location)
	{
	case Location.FUERSTENPLATZ:
  		return 'fuerstenplatz-duesseldorf';
  		break;
	case Location.FRIEDRICHSTADT:
	  	return 'friedrichstadt-duesseldorf';
  		break;
	default:
		console.log("Unbekannter Ort: "+location);
  		return '';
}
}

var buildTargetAdress=function(location){
	var targetAdress=BASE_URL+translateLocation(location)+'/'+buildDateParameter()+'/'+buildTimeParameter();
	console.log(targetAdress);
	return targetAdress;
}

Domain.buildTargetAdress=buildTargetAdress;

//
// Eigentlich nur Month +1
var getReadableMonth = function(dateObject){
	var readableMonth=dateObject.getMonth()+1
	console.log('Readable Month '+readableMonth);
	return readableMonth;
}

Domain.getReadableMonth=getReadableMonth;

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

Domain.getHeaderString=getHeaderString;

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

Domain.getHtmlString=getHtmlString;

module.exports = Domain;