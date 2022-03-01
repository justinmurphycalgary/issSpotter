const request = require("request-promise-native");

function nextISSTimesForMyLocation (times) {
  return request('https://api64.ipify.org?format=json')
  .then((body) => {
   return JSON.parse(body).ip ;
  })
  .catch((err) => {
    if (err.name === 'StatusCodeError'){
      console.log("StatusCodeError => ", err.name, err.statusCode);
    } else if (err.name === 'RequestError'){
      console.log("RequestError => ", err.name, err.statusCode);
    }
  });
}
  
module.exports.nextISSTimesForMyLocation = nextISSTimesForMyLocation;
