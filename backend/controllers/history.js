'use strict'

var purchase = require('../modules/purchase');

var history = {
    getHistory : function(cb){
        purchase.history(function(output){
            if (output) {
                cb(output);
            } else {
                cb();
            }
        });
    }
};

module.exports = history;
