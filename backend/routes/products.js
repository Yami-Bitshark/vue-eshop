'use strict'

var router = require('express').Router();
var products = require('../controllers/products');
router.get('/',function(req,res){
    products.getItems(function(output){
        console.log('in');
        if (!output) {
            res.status(500);
            res.json({
                response : 500
            });
        } else {
            res.status(200);
            res.json({
                data : output,
                response : 200
            });
        }
    });
});

module.exports = router;
