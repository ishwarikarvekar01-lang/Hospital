const mysql = require('mysql2');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ishu',
});

connection.connect(function (err) {
    connection.query("create database hospital", function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});

module.exports = connection;