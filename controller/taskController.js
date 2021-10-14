let taskService = require("../service/taskService");

exports.getTasks = async (req, res) => {
  let testTask = await taskService.getAll();
  res.status(200).json(testTask);
};
