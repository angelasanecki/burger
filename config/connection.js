var mysql = require("mysql");

//creating a connection object

var connection = mysql.createConnection({

	host:"localhost",
	user:"root",
	password:"mysqlpa55",
	database:"burgers_db"


});

//calling the connct method off the connection object
//passing an anonymous function 

connection.connect(function(err){

	if (err) {
		console.error("error connecting: " + err.stack);

		return;
		}

	else{
		console.log("you are connected");
		}

});


//exporting the connection object
module.exports = connection;