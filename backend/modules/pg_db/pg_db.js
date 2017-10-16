'use strict'
var pg = require('pg');
var dbName = 'test';
var fs = require('fs');
var config = fs.readFileSync(__dirname + '/../../global_config.json');
var jsonConfig = JSON.parse(config);
var db = jsonConfig.DB;
var conString = db.connector + '://' + db.username + ':' + db.password + '@' + db.url + ':' + db.port + '/' + db.db_name;

module.exports = {

    // Connection
    connectPool: function(callback) {
        pg.connect(conString, function(err, client, done) {
            if (err)
                console.log(err);
            callback(err, client, done);
        });
    },

    // Query executer
    exec: function(query, values, callback) {
        var _this = this;
        _this.connectPool(function(err, client, donec) {
            donec();
            if (err) {
                console.log(err);
                callback();
                return;
            }
            client.query(query, values, function(err, result) {
                if (err) {
                    console.log(err);
                    callback();
                    return;
                }
                callback(result);
                return;
            });
        });
    }
};