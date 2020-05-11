var express= require('express');
var app=express();
var join2=require('./join2.js')

app.get('/',function(req,res)
{
    console.log("excuted");
    join2.query("SELECT empinfo.name, empdetails.phone FROM empinfo INNER JOIN empdetails ON empinfo.id=empdetails.id",
    function(err,result){
          if(err)
                throw (err);
            else 
            res.send(result);
            console.log(result);

});
});

app.listen(9000,function(req,res)
{
        console.log(9000," connected");
});
