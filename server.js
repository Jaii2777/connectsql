var express = require('express');
var app = express();
var db = require('./db');
//var error=require('./error');
//server = require('http').createServer(app);
//const con=require('con');
//get id 1
/*var  finduser =function(data,callback)
{
    if(!db[id])
    return callback(new Error(
        '404 not found'+data
    ));
    return callback(null,db[id]);
};*/
app.get('/studentsinfo/:id', function(request, response){
    console.log('GET request received at /') 

    db.query("SELECT * FROM studentsinfo WHERE id=?",[request.params.id], function (err, result) 
    {
            /*var data=request.params.id;
            finduser(data,function(error,user)
            {
            if(error)

                return next(error);
            return response.render(results);
        
             } )*/
        
             if (!result.length) 
             {
                    //response.head('text/plain');
                 response.status(404).send('404 NOT FOUND');
             }
             else
             {
                response.send(result);
             }

});
});

app.use(function(request,response)
{
    response.status(404).send('not fount');
});
app.listen(9000,function(request,response)
{
    console.log(9000,"connencted in 9000");
});