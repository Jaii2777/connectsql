const mysql=require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json);


var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student',
   // port:3308
});

mysqlConnection.connect((err)=>
{
        if(!err)
            console.log("db connected");
        else    
                console.log("somthing wrong"+ json.stringify(err,undefined,2));
});

app.listen(3008,()=>console.log("excute in 3008"));

app.get('/studentinfo',(req,res)=>{
mysqlConnection.query('SELECT * FROM studentinfo',(err, rows, fields)=>
{
        if(!err)
        console.log(rows);
        else
        console.log(err);
        
    })
});
app.get('/studentinfo/:id',(req,res)=>{
    mysqlConnection.query('SELECT  FROM studentinfo WHERE id= ?',[req.params.id],(err, rows, fields)=>
    {
            if(!err)
            res.send("deleted successfully");
            else
            console.log(err);
            
        })
    });
    

