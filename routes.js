var express=require("express");
var router=express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"sampledb",
    password: "root"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM myguests", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      router.get("/",function(req,res){
        console.log("in start");
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            console.log(row.email)
            res.write(row.email);
            res.end();
          });
        
    });
    });
  });  

module.exports=router;