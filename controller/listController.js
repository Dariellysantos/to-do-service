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

exports.createList = async (req, res) => {
  try {
    const body = req.body;
    let list = await listService.save(body);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.changeList = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    let list = await listService.update(id, body);
    res.status(201).json("Alterado com sucesso!");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteList = async (req, res) => {
  const id = req.params.id;
  try {
    let list = await listService.delete(id);
    res.status(200).json("Deletado com sucesso");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
