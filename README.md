localOepnv
==========

Ziel:
----
* Entwicklung eines Tools, dass die Abfahrten in der Umgebung anzeigt.
	* Antwort auf die Frage: "Welche Bahn bringt mich denn nach Hause?"
* Anwenden einer neuen Sprache oder einer neuen Umgebung, z.B. node.js
* TDD 

Umfeld:
------
* Gibt es sowas schon?
* Welche Ansätze gibt es überhaupt
	* Bahn
		* Umfangreich
		* Keine Verspätungsdaten für den VRR
		* Hafas wohl handhabbar
	* VRR
		* Daten recht aktuell
		* Komplizierter Datenabruf
		* Es gibt allerdings die Möglichkeit, die Links zu den Abfahrtsmonitoren einzelner Haltestellen separat abzurufen
	* Rheinbahn
		* Daten recht aktuell
		* Komplizierter Datenabruf
	* Öffi
	* iOs Abfahrt etc.

	* verkehrsmittelvergleich.de
		* REST API 
		* Gefahr der Änderung recht groß
		* relativ einfaches parsing 

Risiken:
--------
* Wie komme ich an die Daten?
	* Vrr/Rheinbahn sieht kompliziert aus
	* Bahn mit Hafas
	* verkehrsmittelvergleich.de gut für den ersten Wurf
* Verspätungsdaten?
* Mapping von Locationdaten auf Haltestellen
* Ist das zeitlich machbar?
* Wie gehe ich mit Änderung der Grundlagendaten um?

Ausbaustufen:
-------------
1. Ermittlung von sinnvollen Daten
	- Linie
	- Uhrzeit
	- Haltestelle
	- Verspätung
2. Proof of Concept nur für den Fürstenplatz
3. Einführung von Locationdaten für Düsseldorf


TODO
----
* Modularisieren
* Variable Zeitparameter
* Meherer Haltestellen
* Vielleicht 'prototypischer' bauen
* Dependecies formulieren
* Umbauen auf express
* StringUtilities?
	* Reicht underscore.string?


