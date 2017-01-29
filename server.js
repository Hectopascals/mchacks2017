
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


var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});