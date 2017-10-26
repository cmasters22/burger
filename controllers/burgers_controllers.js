
 var express = require("express");
 var router = express.Router();

 var burg = require("../models/burger.js");

 router.get("/", function(req, res){
 	burg.SelectAll(function(data){
 		var burgObject = {
 			burgers: data
 		};
 		console.log(burgObject);
 	});
 });

var burgName = req.body.burger_name;

 router.post("/api/burgers", function(req, res){
 	burg.insertOne(burgName, function(res){
 		res.json({ id: result.insertId});
 	});
 });

var burgerId = req.params.id;
 router.put("/api/burgers/:id", function(req, res){
 	burg.updateOne(burgerId, function(res){
 		if (res.changedRows === 0){
 			return res.status(404).end();
 		}
 	});
 });

 module.exports = router;