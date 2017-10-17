'use strict'
const http         = require('http'),
      express      = require('express'),
      init         = require('./app_init'),
      app          = express();

init(app);

let server = http.createServer(app);

server.listen(3000,'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
