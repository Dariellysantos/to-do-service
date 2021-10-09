exports.getTasks = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      listId: 1,
      title: "fazer api para buscar todas as tasks",
      createdAt: "2021-04-23T00:00:00",
      updatedAt: null,
      deletedAt: null,
    },
    {
      id: 1,
      listId: 1,
      title: "fazer api para buscar todas as tasks",
      createdAt: "2021-04-23T00:00:00",
      updatedAt: null,
      deletedAt: null,
    },
  ]);
};
