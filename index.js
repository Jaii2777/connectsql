const mysql=require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json);

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sampledb'
});

mysqlConnection.connect((err)=>
{
        if(!err)
            console.log("db connected");
        else    
                console.log("somthing wrong"+ json.stringify(err,undefined,2));
});

app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"),function(){
    console.log("server Started");
});
app.get('/myguests',(req,res)=>{
mysqlConnection.query('SELECT * FROM myguests',(err, rows, fields)=>
{
    console.log("in");    
    if(!err)
        console.log(rows);
        else
        console.log(err);
        
    })
});
