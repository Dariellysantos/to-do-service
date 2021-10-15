const List = require("../model/listModel");
const Task = require("../model/taskModel");

exports.getAll = async () => {
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
  if ((await Task.findByPk(idReceived)) === null) {
    throw Error("Id não encontrado");
  }
  if (body.listId) {
    if ((await Task.findByPk(body.listId)) === null) {
      throw Error("ERROR: listId inexistente");
    }
  }
  const task = await Task.update(body, {
    where: {
      id: idReceived,
    },
  });

  return task;
};

exports.delete = async (idReceived) => {
  if ((await Task.findByPk(idReceived)) === null) {
    throw Error("Id não encontrado");
  }
  const task = await Task.destroy({
    where: {
      id: idReceived,
    },
  });
  console.log(task);
  return task;
};
