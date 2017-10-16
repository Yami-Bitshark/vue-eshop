"use strict"
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Config

var init = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cors({origin : '*'}));
    app.use('/api/v' + apiVersion + '/search', require('./controllers/api/v1/search.js'));
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.end(err.message);
        });
    }
};

module.exports = init;
