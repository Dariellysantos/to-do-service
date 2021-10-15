const List = require("../model/listModel");
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

exports.save = async (body) => {
  if (body.title === undefined) {
    throw Error("title não informado");
  }
  if (body.listId === undefined) {
    throw Error("listId não informado");
  }
  if ((await List.findByPk(body.listId)) === null) {
    throw Error("ERROR: listId inexistente");
  }
  let task = await Task.create(body);

  return task;
};

exports.update = async (idReceived, body) => {
  const task = await Task.update(body, {
    where: {
      id: idReceived,
    },
  });
  console.log(idReceived);
  console.log(task);
  console.log(Task);

  return task;
};

exports.delete = async (idReceived) => {
  const task = await Task.destroy({
    where: {
      id: idReceived,
    },
  });
  console.log(task);
  return task;
};
