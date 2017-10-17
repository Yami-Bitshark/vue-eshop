'use strict'
var pg = require('./modules/pg_db');
var format = require('pg-format');
var list = [
    ['windows xp',70,1],
    ['windows 7',90,2],
    ['windows 10',120,3],
    ['NVIDIA GTX',300,4],
    ['League of Legends',30,5],
    ['Fifa 2018',10,6],
    ['King Of Fighters XIII',20,7]
];

var query = format('INSERT INTO products (name,price,sku) VALUES %L',list);
pg.exec(query,[],function(output){
    console.log('DB.products Loaded');
    return;
});
