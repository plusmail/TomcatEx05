var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'empdb'
});