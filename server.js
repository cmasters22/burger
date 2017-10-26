var express = require("express");

var mo = require("method-override");

var bp = require("body-parser");

exhand = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/pulic"));

app.use(bp.urlencoded({
	extended: false
}));

app.use(mo("_method"));
app.engine("handlebars", exhand({
	defaultLayout: "main"
}));

var port = 3000;
app.listen(port);