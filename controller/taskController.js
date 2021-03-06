let taskService = require("../service/taskService");

exports.getTasks = async (req, res) => {
  let testTask = await taskService.getAll();
  res.status(200).json(testTask);
};

exports.getTask = async (req, res) => {
  const id = req.params.id;
  try {
    let testTask = await taskService.getOne(id);
    res.status(200).json(testTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.createTask = async (req, res) => {
  const body = req.body;

  try {
    let task = await taskService.save(body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.changeTask = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    let task = await taskService.update(id, body);
    res.status(201).json("Alterado com sucesso!");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    let task = await taskService.delete(id);
    res.status(200).json("Deletado com sucesso");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
