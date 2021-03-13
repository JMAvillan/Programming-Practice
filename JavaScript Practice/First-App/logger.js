
//fake url
var url = 'http://mylogger.io/log'

function log(msg) {
  //Send a http request
  console.log(msg);
}

//Adding a method to the export object
//and setting it to the log we have defined in this module.
module.exports = log;

//same with url. The name can be whatever you want
//module.exports.endPoint = url;