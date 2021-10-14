let listService = require("../service/listService");

exports.getLists = async (req, res) => {
  let lists = await listService.getAll();
  res.status(200).json(lists);
};
