let taskService = require("../service/taskService");

exports.getTasks = async (req, res) => {
  let testTask = await taskService.getAll();
  res.status(200).json(testTask);
};

exports.getTask = async (req, res) => {
  const id = req.params.id;
  let testTask = await taskService.getOne(id);
  res.status(200).json(testTask);
};

exports.createTask = async (req, res) => {
  const body = req.body;
  let task = await taskService.save(body);
  res.status(200).json(task);
};

exports.changeTask = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  let task = await taskService.update(id, body);
  res.status(200).json(task);
};
