var mysql = require('mysql');
var express=require('express');
var router=express.Router();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"sampledb",
  password: "root"
});

router.get("/",function(req,res){
    console.log("in");
    res.write("hi");
    res.end;
  });
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM myguests", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      
    });
  });

  module.exports=router;