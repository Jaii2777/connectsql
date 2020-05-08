var express = require('express');
var app = express();
var db = require('./db');
//server = require('http').createServer(app);
//const con=require('con');
//get id 1
app.get('/', function(request, response){
    console.log('GET request received at /') 
    db.query("SELECT id FROM studentsinfo WHERE ID='1'", function (err, result) {
        if (err) 
       throw err;

        else{
            response.send(result);
            console.log(result);
        }

    });
});
//get an id from db
app.get('/customers/:id', function(request, response){
    console.log('GET request received at /') 
    try{
    db.query("SELECT * FROM studentsinfo WHERE id=?",[request.params.id], function (err, result) 
    {
        if(err){
            throw err;
        }
        else
        {
            response.send(result);
            console.log(result);
        }
    })
}
catch(error)
{
    //response.send(500);
    response.status(500).send(error.message);
}
});

app.delete('/customers/:id', function(request, response){
    console.log('GET request received at /') 
    db.query("DELETE  FROM customers WHERE id=?",[request.params.id], function (err, result) {
        if (err) throw err;

        else{
            response.send("deleted");
            console.log("deleted");
        }

    });
});
/*app.delete('/customers', function(request, response){
    console.log('GET request received at /') 
    let cus=request.body;
    var sql="SET @id=? ;SET @name=?;SET @mail=?;\ CALL  OK(@id,@name,@mail);";

    db.query(sql,[cus.id,cus.name,cus.mail], function (err, result) {
        if (err) throw err;

        else{
            response.send(result);
            console.log(result);
        }

    });
});*/

// listen for trafic and display on localhost:9000
app.listen(9000, function () {
    console.log('Connected to port 9000');
});