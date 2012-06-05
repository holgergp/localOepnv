var _s = require('underscore.string');

//Todo Oder doch statisch definieren?
function Utility(){}

// Konvertiere eine Nummer in einen String und füge eine Null an den Anfang falls die Stringlaenge <2 ist
// Beispiel: 6=> '06'
var fillZeros = function(number) {
	return paddedString=_s.pad(number,2,"0");
}

Utility.fillZeros=fillZeros;

module.exports = Utility;