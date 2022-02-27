const request = require("request-promise-native");
const fetchMyIP = require('./ip').fetchMyIP;

const promiseCallback =  (body) => {
  console.log("GEO ADDRESS :>> ", JSON.parse(body));
  global.IPAddress = JSON.parse(body);
  return JSON.parse(body);
}


const fetchCoordsByIP = (IP) => {
  
  return request(`https://api.freegeoip.app/json/${IP}?apikey=13a50be0-96d1-11ec-a496-b9a091e3b654`)
  .then(promiseCallback)
  



  // .then((body) => {
  // console.log("GEO ADDRESS :>> ", JSON.parse(body));
  // global.IPAddress = JSON.parse(body);
  // return JSON.parse(body);
  // })
  // .catch((err) =>{ 
  // console.log('error :>> ', err);}
  // )

}

module.exports.fetchCoordsByIP = fetchCoordsByIP;
