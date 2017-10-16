'use strict'
const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      express      = require('express'),
      init         = require('./app_init'),
      app          = express(),
      env          = process.env;

init(app);

let server = http.createServer(app);

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
