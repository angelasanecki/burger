//import mySQL connection

var connection = require("./connection.js");

//creating an object with various methods on it

var orm = {

	selectAll: function(whatToSelect, tableInput){
		var queryString = "SELECT ?? FROM ??";
		connection.query(queryString, [whatToSelect, tableInput], function(err, result){

			if(err){
				throw err;
			}
			console.log(result);

		}};





};

//export the orm object 


module.exports = orm
