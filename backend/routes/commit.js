'use strict'

var router = require('express').Router();
var commit = require('../controllers/commit');
router.post('/',function(req,res){
    commit.setPurchase(req.body.list,function(output){
        if (output) {
            res.status(200);
            res.json({
                response : 200
            });
        } else {
            res.status(500);
            res.json({
                response : 500
            });
        }
    });
});
module.exports = router;
