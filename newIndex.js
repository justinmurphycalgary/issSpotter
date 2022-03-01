const request = require("request-promise-native");
//const fs = require('fs/promises');


const fetchGeo = (ip) =>{ 
  return request(`https://api.freegeoip.app/json/${ip}?apikey=13a50be0-96d1-11ec-a496-b9a091e3b654`)
   .then ((GEO) => {
     return geoLocation = {
    "latitude": JSON.parse(GEO).latitude,
    "longitude": JSON.parse(GEO).longitude
  }  
}) .catch((err) => {
  if (err.name === 'StatusCodeError'){
    console.log("StatusCodeError => ", err.name, err.statusCode);
  } else if (err.name === 'RequestError'){
    console.log("RequestError => ", err.name, err.statusCode);
  }
});
}

function fetchIP () {
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



const endResult = function(){
  fetchIP()
    .then((ip) => 
      fetchGeo(ip))
    .then((geo) => console.log('GEO :>> ',geo))
}

endResult()














// request("https://api64.ipify.org?format=json")
//   .then((ipAddress) => {
//      //console.log('ipAddressObject :>> ', ipAddress);
//     // console.log('type :>> ', (JSON.parse(ipAddress)).ip);
//     return (geoObject = request(
//       `https://api.freegeoip.app/json/${
//         JSON.parse(ipAddress).ip
//       }?apikey=13a50be0-96d1-11ec-a496-b9a091e3b654`
//     ));
//   })
//   // .then((geoObject) => {
//   //   const lat = JSON.parse(geoObject).latitude;
//   //   const lon = JSON.parse(geoObject).longitude;
//   //   ISS = request(
//   //     `https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`
//   //   );
//   //   console.log('ISS :>> ', ISS);
//   // })
//   .catch((err) => {
//     console.log("ERROR :>> ", ERROR);
//   })
//   // .finally((geoObject) => {
//   //   console.log("DONE :>> ");
//   // });
