//const fetchMyIP = require('./scripts/ip').fetchMyIP
const request = require("request-promise-native");
const { fetchCoordsByIP } = require("./scripts/fetchCoordsByIP");
const { fetchMyIP } = require("./scripts/fetchMyIp");
const { fetchISSFlyOverTimes } = require("./scripts/fetchISSFlyOverTimes");

const endResult = function () {
  fetchMyIP()
    .then((ip) => fetchCoordsByIP(ip))
    .then((geo) => fetchISSFlyOverTimes(geo))
    //.then((times) => nextISSTimesForMyLocation(times));
};

endResult();
