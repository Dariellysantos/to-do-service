const List = require("../model/listModel");
const Task = require("../model/taskModel");
const database = require("../config/dbServer");

exports.getAll = async () => {
  const lists = await List.findAll();

  return lists;
};

exports.getOne = async (id) => {
  const list = await List.findByPk(id);

  if (list === null) {
    throw Error("Id não encontrado");
  }

  return list;
};
