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

  sql = "UPDATE items SET ";

  sql = sql + "name = " + connection.escape(event.name);

  sql = sql + " WHERE item_id = " + connection.escape(event.item_id);

	connection.query(sql, function (error, results, fields) {

  response = {};
  response['item_id'] = event.item_id;
  response['name'] = event.name;

  callback( null, response );

  });
}
