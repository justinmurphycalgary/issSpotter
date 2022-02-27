const request = require("request-promise-native");


const fetchMyIP = () => {
  return request("https://api64.ipify.org?format=json")
  //return JSON.parse(body).ip;
}
  // .then((body) => {
  //  console.log("IPAdress :>> ", JSON.parse(body).ip);
  // // global.IPAddress = JSON.parse(body).ip;
  
  // })
  // .catch((err) =>{ 
  // console.log('error :>> ', err);}
  // )

//}

module.exports.fetchMyIP = fetchMyIP;
