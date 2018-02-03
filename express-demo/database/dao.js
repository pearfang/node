var mysql = require('mysql');
//var dbConfig = require('./dbconfig');


var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pear2008',
    database: 'node'
});

    var db ={
        query: function (sql, callback) {
           
            pool.getConnection(function (err, conn) {
                if (err) {
                    callback(err, null, null)
                } else {
                    console.log('conn连接成功');
                    conn.query(sql, function (error, results, fields) {
                        conn.release();
                        callback(error, results, fields);
                    })
                }

            });
        }
    };
 

module.exports = db;