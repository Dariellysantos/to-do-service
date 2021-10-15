let listService = require("../service/listService");

exports.getLists = async (req, res) => {
  try {
    let lists = await listService.getAll();

    res.status(200).json({
      error: false,
      data: lists,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      data: null,
    });
  }
};
