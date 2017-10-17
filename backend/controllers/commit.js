'use strict'
var purchase = require('../modules/purchase');
var commit = {
    setPurchase : function(list,cb){
        purchase.commit(list,function(){
            cb(true);
        });
    }
};

module.exports = commit;
