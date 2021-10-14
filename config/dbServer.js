const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_todo", "", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;
