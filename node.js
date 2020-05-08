var express=require('express');

var router=express().router();

router.get('/', function(request, response){
    console.log('GET request received at /') 
    con.query("SELECT id FROM customers where id='1'", function (err, result) {
        if (err) throw err;
        else{
            response.send(result)
        }
        
    });
});
module.exports=router;