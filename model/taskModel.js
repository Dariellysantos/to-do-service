const Sequelize = require("sequelize");
const database = require("../config/dbServer");
const List = require("./listModel");

const Task = database.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    vaidete: {
      notEmpty: {
        msg: "Esse campo não pode ser vazio",
      },
    },
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
