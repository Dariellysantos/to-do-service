let mysql = require("mysql");

module.exports = function () {
  return (connection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "db_todo",
  }));
};
