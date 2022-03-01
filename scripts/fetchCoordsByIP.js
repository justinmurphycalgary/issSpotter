const request = require("request-promise-native");

const fetchCoordsByIP = (ip) =>{ 
  return request(`https://api.freegeoip.app/json/${ip}?apikey=13a50be0-96d1-11ec-a496-b9a091e3b654`)
   .then ((GEO) => {
     return geoLocation = {
    "latitude": JSON.parse(GEO).latitude,
    "longitude": JSON.parse(GEO).longitude
  }  
}) .catch((err) => {
  if (err.name === 'StatusCodeError'){
    console.log("fetchCoordsByIP => ", err.name, err.statusCode);
  } else if (err.name === 'RequestError'){
    console.log("fetchCoordsByIP => ", err.name, err.statusCode);
  }
});
}

module.exports.fetchCoordsByIP = fetchCoordsByIP;
