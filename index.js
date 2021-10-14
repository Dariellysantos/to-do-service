let express = require("express");
let app = express();
const taskController = require("./controller/taskController.js");
const listController = require("./controller/listController");

app.get("/tasks", taskController.getTasks);
app.get("/tasks/:id", taskController.getTask);
app.post("/task", taskController.createTask);
app.put("/task/:id", taskController.changeTask);
app.delete("/task/:id", taskController.deleteTask);

app.get("/lists", listController.getLists);

app.listen(3000, "localhost", () => console.log("Serviço toDo ativo."));
