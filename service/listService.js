const List = require("../model/listModel");
const Task = require("../model/taskModel");
const database = require("../config/dbServer");

exports.getAll = async () => {
  const lists = await List.findAll();

  return lists;
};

exports.getOne = async (id) => {
  const list = await List.findByPk(id);

  if (list === null) {
    throw Error("Id não encontrado");
  }

  return list;
};

exports.save = async (body) => {
  let list = await List.create(body);

  return list;
};

exports.update = async (idReceived, body) => {
  if ((await List.findByPk(idReceived)) === null) {
    throw Error("Id não encontrado");
  }
  const list = await List.update(body, {
    where: {
      id: idReceived,
    },
  });

  return list;
};

exports.delete = async (idReceived) => {
  if ((await List.findByPk(idReceived)) === null) {
    throw Error("Id não encontrado");
  }
  const list = await List.destroy({
    where: {
      id: idReceived,
    },
  });
  console.log(list);
  return list;
};
