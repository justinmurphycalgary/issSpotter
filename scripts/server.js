const express = require('express');
const app = express();
// this allows the express server to listen on port, and a function to be done when the port is active
app.listen(6000, () => console.log('listening on port 6000'));

module.exports.app = app;