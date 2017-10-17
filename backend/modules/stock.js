'use strict'
var pg = require('./pg_db');

var stock = {
    getStock : function(cb){
        var query = 'SELECT * FROM products';
        pg.exec(query,[],function(output){
            if(!output && !output.rows){
                cb();
            } else {
                cb(output.rows);
            }
        });
    }
};
module.exports = stock;
