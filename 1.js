const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'employee'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});cd