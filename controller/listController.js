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

exports.getList = async (req, res) => {
  try {
    const id = req.params.id;
    let testList = await listService.getOne(id);
    res.status(200).json(testList);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
