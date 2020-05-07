var express=require("express");
var path=require("path");
var routes=require("./routes");
var app=express();
var mysql = require('mysql');

app.set("port",process.env.PORT || 3006);
app.use(routes);

app.listen(app.get("port"),function(){
    console.log("server Started");});

app.get('/id',(res,req)=>
{
        con.query('SELECT * FROM customers',(err,rows,fields)=>
        {
            if(!err)
                console.log(rows);
            else    
                console.log(err);
        });

        app.delete('/customers/:name',(res,req)=>
        {
            con.query('DELETE FROM customers WHERE name=?',[req,params.name],(err,rows,fields)=>
            {
                if(!err)
                res.send("deleted success");
                else
                console.log(err);
            })
        });
      
        app.post('customers',(req,res)=>
        {
            let cus=req.body;
            var sql="SET @cusid= ? ;SET @cusname=?,SET @cusmail= ? \
            CALL cusedit(@cusid,@cusname,@cusmail),";

            con.query('DELETE FROM customers WHERE cusid =?',[req.paramms.id],(err,rows,fields)=>
            {
                if(!err)
                res.send("deleted succes");
                else
                console.log(err);

            })
        });
        
    
    //    connection.end();
});
  


