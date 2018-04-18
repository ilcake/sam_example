const vandium = require( 'vandium' );

var mysql      = require('mysql');

exports.handler = vandium.generic()
    .handler( (event, context, callback) => {

  var connection = mysql.createConnection({
    host     : '[rds_host]',
    user     : '[rds_user]',
    password : '[rds_password]',
    database : '[rds_database]'
  });

  sql = "SELECT * FROM items WHERE item_id = " + connection.escape(event.item_id);

	connection.query(sql, function (error, results, fields) {

	callback( null, results );
  });
}
