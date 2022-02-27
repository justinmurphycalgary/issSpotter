//const app = require('./scripts/server');
//const fetchMyIP = require('./scripts/ip').fetchMyIP
const { fetchCoordsByIP } = require("./scripts/fetchCoordsByIP");
const { fetchMyIP } = require("./scripts/ip");

//  let p = new Promise((res, rej) =>{
//  fetchMyIP() ;
//  })
// console.log('fetchMyIP() :>> ', fetchMyIP());

fetchMyIP().then((IP) => {
  const IPString = JSON.parse(IP).ip;
  fetchCoordsByIP(IPString).then((GEO) => {
    const geoLocation = {'latitude': GEO.latitude, 'longitude': GEO.longitude }
    //console.log('GEO :>> ', GEO);
    //console.log('GEO :>> ', geoLocation);
  })
})

