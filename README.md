localOepnv
==========

Ziel:
* Entwicklung eines Tools, dass die Abfahrten in der Umgebung anzeigt
* Anwenden einer neuen Sprache oder einer neuen Umgebung, z.B. node.js
* TDD 

Umfeld:
* Gibt es sowas schon?
* Welche Ansätze gibt es ¸berhaupt
	* Bahn/Vrr
	* Öffi
	* iOs Abfahrt etc.

* verkehrsmittelvergleich.de
	* REST API 
	* Gefahr der Änderung recht groß
	* relativ einfaches parsing 

Risiken:
* Wie komme ich an die Daten
* Vrr sieht kompliziert aus
	* Bahn mit Hafas
		* Verspätungsdaten?
* Mapping von Locationdaten auf Haltestellen
* Ist das zeitlich machbar?
* Wie gehe ich mit Änderung der Grundlagendaten um?

Ausbaustufen:
1. Ermittlung von sinnvollen Daten
	- Linie
	- Uhrzeit
	- Haltestelle
2. Proof of Concept nur für den Fürstenplatz
3. Einführung von Locationdaten für Düsseldorf


TODO

* Modularisieren
* Variable Zeitparameter
* Meherer Haltestellen
* Vielleicht 'prototypischer' bauen
* Dependecies formulieren
* Umbauen auf express
* StringUtilities?
	* Reicht underscore.string?


