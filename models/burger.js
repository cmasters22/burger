var orm = require("../config/orm.js");

var burger= {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(cb){
		orm.insertOne("burgers", "burger_name", colValue, function(res){
			cb(res);
		});
	},
	updateOne: function(db){
		orm.updateOne("burgers", "devoured", true, "id" function(res){
			cb(res);
		});
	}
};
module.exports = burger;