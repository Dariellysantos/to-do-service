exports.getAll = async () => {
  const List = require("../model/listModel");
  const database = require("../config/dbServer");

  const lists = await List.findAll();

  return lists;
};
