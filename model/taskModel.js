const Sequelize = require("sequelize");
const database = require("../config/dbServer");
const List = require("./listModel");

const Task = database.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNul: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
});

Task.belongsTo(List, {
  constraint: true,
  targetKey: "id",
  foreignKey: "listId",
});

module.exports = Task;
