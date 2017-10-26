
var mysql = require("mysql");

var connection= mysql.createConnection({
  port: 8080,
  host: "",
  user: "",
  password: "Soccer12",
  database: ""
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
