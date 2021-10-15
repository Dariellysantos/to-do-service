let express = require("express");
let app = express();
const taskController = require("./controller/taskController.js");
const listController = require("./controller/listController");

app.use(express.json());

app.get("/tasks", taskController.getTasks);
app.get("/task/:id", taskController.getTask);
app.post("/task", taskController.createTask);
app.put("/task/:id", taskController.changeTask);
app.delete("/task/:id", taskController.deleteTask);

app.get("/lists", listController.getLists);
app.get("/list/:id", listController.getList);
app.post("/list", listController.createList);
app.put("/list/:id", listController.changeList);
app.delete("/list/:id", listController.deleteList);

app.listen(3000, "localhost", () => console.log("Serviço toDo ativo."));
