const vandium = require( 'vandium' );
var mysql      = require('mysql');

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

exports.handler = vandium.generic()
    .handler( (event, context, callback) => {

  sql = "DELETE FROM items WHERE item_ID = " + connection.escape(event.item_id);

  connection.query(sql, function (error, results, fields) {

  response = {};
  response['deleted'] = event.item_id;

  callback( null, results );

  });
}
