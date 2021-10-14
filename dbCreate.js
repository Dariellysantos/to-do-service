(async () => {
  const database = require("./config/dbServer");
  const Task = require("./model/taskModel");
  const List = require("./model/listModel");

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }

  await database.sync();
  const novaList = await List.create({
    title: "efeito do teste",
    deletedAt: null,
  });

  const novaTask = await Task.create({
    title: "testando",
    deletedAt: null,
    listId: novaList.id,
  });
})();
