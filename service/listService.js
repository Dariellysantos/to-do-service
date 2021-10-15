const List = require("../model/listModel");

exports.getAll = async () => {
  const lists = await List.findAll();

  return lists;
};
