const mysql = require('mysql2');
var pool = mysql.createPool({
    "host": "localhost",
    "user" : "root",
    "password": "senha@1",
    "database" : "ecommerce",
    "port": 3306
});

exports.pool = pool;