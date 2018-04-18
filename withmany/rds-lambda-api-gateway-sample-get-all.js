const vandium = require('vandium')

var mysql = require('mysql')

exports.handler = mysql.createConnection({
    host : '[rds_host]',
    user : '[rds_user]',
    password : "[rds_password]",
    database: "[rds_database]"
})

    connnection.query('SELECT * FROM items' , function (error, reesult, fields))
    callback(null, results)

