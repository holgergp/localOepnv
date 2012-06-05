var jsdom  = require('jsdom');
var httpAgent = require('http-agent');
var fs  = require('fs');
var jquery = fs.readFileSync("../lib/jquery-1.7.2.min.js").toString();

var domain = require('../verkehrsmittelvergleich.de/domain');

connection = function(){}

var getResponseData = function(locations,callback) {
	
	var agent = httpAgent.create(domain.HOST, buildPathArray(locations));
	var result='';
	agent.addListener('next', function (err, agent) {
	
		console.log("Http-Agent Error: "+err);
		jsdom.env({
			html: agent.body,
			src: [
				jquery
			],
			done: function(errors, window) {
				console.log('done parsing: '+agent.url);
				var $ = window.$;
				var jqueryResult=$(".board").parent().html();
				result+=jqueryResult;
				agent.next()
			}

		});
	
	});
	agent.addListener('stop', function (agent) {
	  console.log('the agent has stopped');
	  callback(domain.getHtmlString(result));
	});
	
	agent.start();

}

//build an array containing proper paths for verkehrsmittelvergleich.de
var buildPathArray=function(locations) {
	var paths=[];
	locations.forEach(function(item) {
		paths.push(domain.buildTargetPath(item));
	});
	return paths;
}

connection.getResponseData=getResponseData;

module.exports=connection;