var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "students"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM studentsinfo", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});