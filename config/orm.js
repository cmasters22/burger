var connection = require("./connection.js");

var orm = {
	SelectAll: function (table, cb){
		var sql_query = "SELECT * FROM " + table;
		connection.query(sql_query, function (err, res){
			if (err) throw err;
			cb(res);
		});
	},
	insertOne: function(table, colName, colValue, cb){
		var sql_query = "INSERT INTO" + table + "(" + colName +") VALUES (" + colValue + ");";
			connection.query(sql_query, function (err, res){
				if (err) throw err;
				cb(res);
	});
},
	updateOne: function(table, colName, colValue){
		var sql_query = "UPDATE" + table + "SET" + colName + "=" + 
		colValue + "WHERE " + condition + "=" + condValue;
		connection.query(sql_query, function(err, res){
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;