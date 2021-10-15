const Sequelize = require("sequelize");
const database = require("../config/dbServer");

const List = database.define(
  "list",
  {
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
  },
  {
    paranoid: true,
    timestamps: true,
  }
);
module.exports = List;
