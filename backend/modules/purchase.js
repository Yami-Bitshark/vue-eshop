'use strict'
var pg = require('./pg_db');
var format = require('pg-format');

var purchase = {
    commit : function(list,cb){
        var query = format('INSERT INTO purchase (item_id,quantity) VALUES %L',list);
        pg.exec(query,[],function(output){
            cb();
        });
    },
    history : function(cb){
        var query = 'SELECT a.name, b.quantity, b.quantity*a.price as billed FROM products as a, purchase as b WHERE b.item_id = a.id';
        pg.exec(query,[],function(output){
            if (!output && !output.rows) {
                cb();
            } else {
                cb(output.rows);
            }
        });
    }
};

module.exports = purchase;
