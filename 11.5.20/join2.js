var mysql=require('mysql')

var con=mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'root',
    database: 'work'
});

con.connect(function(err)
{
            if(err)
                    throw err;
            else    
                console.log("connected");
});

module.exports=con;
