var mysql = require('mysql');
var express=require("express");
var router=express.Router();


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"mydb",
    password: "root"
  });
  

module.exports=router;