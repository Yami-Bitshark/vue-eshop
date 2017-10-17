'use strict'

var router = require('express').Router();
var history = require('../controllers/history');
router.get('/',function(req,res){
    history.getHistory(function(output){
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
