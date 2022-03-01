const request = require("request-promise-native");

function fetchMyIP () {
  return request('https://api64.ipify.org?format=json')
  .then((body) => {
     return JSON.parse(body).ip ;
  })
  .catch((err) => {
    if (err.name === 'StatusCodeError'){
      console.log("fetchMyIP  => ", err.name, err.statusCode);
    } else if (err.name === 'RequestError'){
      console.log("fetchMyIP => ", err.name, err.statusCode);
    }
  });
}
  
module.exports.fetchMyIP = fetchMyIP;
