'use strict'

var pg = require('./pg_db');
/*

var format = require('pg-format');

var values = [
    [ 1, 'jack' ],
    [ 2, 'john' ],
    [ 3, 'jill' ],
];
console.log(format('INSERT INTO test_table (id, name) VALUES %L', values));
// INSERT INTO test_table (id, name) VALUES ('1', 'jack'), ('2', 'john'), ('3', 'jill')

 */
var manageData = {
    domain: {
        //params : [domain,pattern,accuracy,patterns,emails]
        domainSave: function(data,cb) {
            var query = 'INSERT INTO data.domain (domain,pattern,accuracy,patterns,emails,created_at) VALUES ($1,$2,$3,$4,$5,date_trunc(\'day\',NOW())::TIMESTAMP)';
            pg.exec(query,data,function(output){
                cb(true);
            });
        },
        domainFind: function(domain,cb) {
            var query = 'SELECT pattern,accuracy,emails FROM data.domain where domain = $1';
            pg.exec(query,[domain],function(output){
                if(output && output.rows && output.rows[0]){
                    cb({
                        pattern : output.rows[0].pattern,
                        accuracy : output.rows[0].accuracy,
                        emails : output.rows[0].emails
                    });
                } else {
                    cb();
                }
            });
        }
    },
    company: {
        //params : [company,domain,website,link_url]
        companySave: function(data,cb) {
            var query = 'INSERT INTO data.company (company,domain,website,linkedin_url,created_at) VALUES ($1,$2,$3,$4,date_trunc(\'day\',NOW())::TIMESTAMP)';
            pg.exec(query,data,function(output){
                cb(output);
            });
        },
        companyDomainFind: function(company,cb) {
            var query = 'SELECT domain FROM data.company WHERE company = $1';
            pg.exec(query,[company],function(output){
                if(output && output.rows && output.rows[0]){
                    cb( output.rows[0].domain);
                } else {
                    cb();
                }
            });
        },
        companylinkFind: function(link,cb) {
            var query = 'SELECT domain FROM data.company WHERE linkedin_url = $1';
            pg.exec(query,[link],function(output){
                if(output && output.rows && output.rows[0]){
                    cb({
                        domain : output.rows[0].domain
                    });
                } else {
                    cb();
                }
            });
        },

    },
    list: {
        //params : [name,description,user_id]
        createList: function(data,cb) {
            var query = 'INSERT INTO data.list (name,description,user_id,created_at) VALUES ($1,$2,$3,date_trunc(\'day\',NOW())::TIMESTAMP)';
            pg.exec(query,data,function(output){
                cb(output);
            });
        },
        getUserLists : function(user_id,cb){
            var query = 'SELECT id, name, description,created_at FROM data.list WHERE user_id = $1';
            pg.exec(query,[user_id],function(output){
                if (output && output.rows) {
                    cb(output.rows);
                } else {
                    cb();
                }
            });

        },
        getList: function(list_id,cb) {
            var query = 'SELECT id,name, email, description, company, linkedin_url FROM data.list_element WHERE user_id = $1'
            pg.exec(query,[list_id],function(output){
                if (output && output.rows) {
                    cb(output.rows);
                } else {
                    cb();
                }
            })
        },
        deleteList : function(list_id,cb) {
            var query1 = 'DELETE FROM data.list_element WHERE list_id = $1';
            var query2 = 'DELETE FROM data.list WHERE id = $1';
            pg.exec(query1,[list_id],function(output1){
                    pg.exec(query2,[list_id],function(output2){
                        cb();
                    });
            });
        },
        //params [[list_id,name,email,desc,company,linkedin],...] list of list // and do some check to limit the number or change the
        //check pg plsql for multiple
        storeIntoList : function(data,cb) {
            var query = format('INSERT INTO data.list_element (list_id,name,email,description,company,linkedin_url) VALUES %L',data);
            pg.exec(query,[],function(output){
                cb();
            });
        },
        //parm [id1,id2,id3]
        deleteFromList : function(ids,cb){
            var query = format('DELETE FROM data.list_element WHERE id IN %L',[ids]);
            pg.exec(query,[],function(output){
                cb();
            });
        },
        updateEmail : function(id,email,cb){
            var query = 'UPDATE data.list_element SET email = $1 WHERE id = $2';
            pg.exec(query,[email,id],function(output){
                cb();
            });
        }
    },
    counter: {
        //plpgsql task
        //for 'xray' and 'bulk' type
        searchCount: function(user_id, count, logType,cb) {
            var query = 'select search_tracker($1,$2,$3)';
            pg.exec(query,[user_id,count,logType],function(output){
                cb();
            });
        },
        emailCount: function(user_id, count, foundNumber, foundDbNumber,cb) {
            var query = 'select email_search_tracker($1,$2,$3,$4)';
            pg.exec(query,[user_id,count,foundNumber,foundDbNumber],function(output){
                cb();
            });
        }
    },

    auth: {
        getApiKey: function() {}
    },
    trackers: {
        getPlan: function() {}
    },
    sign: {
    },
    purchase: {

    }

};
module.exports = manageData;
