const request = require("request-promise-native");

const fetchISSFlyOverTimes = (GEO) =>{ 
  return request(`https://iss-pass.herokuapp.com/json/?lat=${GEO.latitude}&lon=${GEO.longitude}`)
   .then ((times) => {
     console.log('times :>> ', times)
  }  
) 
  .catch((err) => {
  if (err.name === 'StatusCodeError'){
    console.log("StatusCodeError => ", err.name, err.statusCode);
  } else if (err.name === 'RequestError'){
    console.log("RequestError => ", err.name, err.statusCode);
  }
});
}

module.exports.fetchISSFlyOverTimes = fetchISSFlyOverTimes;