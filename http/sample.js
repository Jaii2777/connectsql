var express=require("express");
var router=express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"mydb",
    password: "root"
  });
  

module.exports=router;