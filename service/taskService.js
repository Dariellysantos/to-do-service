const Task = require("../model/taskModel");

exports.getAll = async () => {
  const database = require("../config/dbServer");
  const Task = require("../model/taskModel");
  await database.sync();

  const tasks = await Task.findAll();

  return tasks;
};

exports.getOne = async (id) => {
  const task = await Task.findByPk(id);

  return task;
};
