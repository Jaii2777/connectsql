var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'students',
    //multipleStatements=true
});

connection.connect(function(err) {
    if (err) throw err;
    else
    console.log("connect");
});

module.exports = connection;