//importing the ORM to create function to interact w/ database

var orm = require("../config/orm.js");


var burger = {

	all:function(cb) {
		orm.all("burgers", function(res){
			cb(res);
		});
	}
	
};








//Export the database functions for the controller


module.exports = burger;