'use strict'

var stock = require('../modules/stock');

var products = {
    getItems : function(cb){
        stock.getStock(function(output){
            if(output){
                cb(output);
            } else {
                cb();
            }
        });
    }
};
module.exports = products;
