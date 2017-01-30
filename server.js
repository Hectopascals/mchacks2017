
//var Nuance = require("nuance");
//var nuance = new Nuance("NMDPTRIAL_v_teng_mail_utoronto_ca20170128124910", "961d37652803125315af60fca0ca67509863d10ef5144f4495e3da6017f4e6ad111d133a21258d36d4ed3274b899c550fd965ef2aaad363f90109fa704855516");
//
//nuance.sendDictationRequest({
//    "identifier": "randomIdentifierStringHere", //The user identifier (please refer to Nuance's documentation for more info). 
//    "language": "en-US", //The language code (please refer to Nuance's documentation for more info). 
//    "path": "audio.amr", //The path to the file you would like to send to Nuance. 
//    "additionalHeaders": {}, //If you'd like to supply more headers or replace the default headers, supply them here. 
//    "success": function(resp){ //The success callback function. 
//        console.log(resp);
//    },
//    "error": function(resp){ //The error callback function - returns the response from Nuance that you can debug. 
//        console.log("An error was occurred.");
//        console.log(resp);
//    }
//});

watson = require('watson-developer-cloud');
var io = require('socket.io').listen(8000); // initiate socket.io server

var tone_analyzer = watson.tone_analyzer({
  username: '3ae452d2-f34d-49c8-ae46-e5e135d1a847',
  password: 'zrRaYsuFo6nR',
  version: 'v3',
  version_date: '2016-05-19'
});

global.socket = null;


io.sockets.on('connection', function (socket) {
  global.socket = socket;
  // wait for the event raised by the client
  global.socket.on('my other event', function (data) { 
  	console.log("a print");
    console.log(data);
    tone_analyzer.tone({ text: data["text"] },
	  function(err, tone) {
	    if (err)
	      console.log(err);
	    else {
	      console.log(JSON.stringify(tone.document_tone.tone_categories[0].tones, null, 2));
	      var maxScore = 0; var maxEmotion;
	      var responseArr = tone.document_tone.tone_categories[0].tones;
	      for(response in responseArr) {
	      	console.log(responseArr[response]);
	      	if(responseArr[response]["score"] >= maxScore) {
	      		maxScore = responseArr[response]["score"];
	      		maxEmotion = responseArr[response]["tone_id"];
	      	}
	      }
	      console.log(maxEmotion);

	      // pass this 
	      console.log(global.socket);
	      global.socket.emit('maxEmotion calculated', { text: maxEmotion });
	  	}
	});
  });
});

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});