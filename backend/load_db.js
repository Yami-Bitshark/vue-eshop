'use strict'
var pg = require('./modules/pg_db');
var format = require('pg-format');
var list = [
    ['windows xp',70,100,1],
    ['windows 7',90,100,2],
    ['windows 10',120,100,3],
    ['NVIDIA GTX',300,100,4],
    ['League of Legends',30,100,5],
    ['Fifa 2018',10,100,6],
    ['King Of Fighters XIII',20,100,7]
];

var query = format('INSERT INTO products (name,price,quantity,sku) VALUES %L',list);
pg.exec(query,[],function(output){
    console.log('DB.products Loaded');
    return;
});
