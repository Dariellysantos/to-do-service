let express = require("express");
let app = express();
const taskController = require("./controller/taskController.js");
const listController = require("./controller/listController");

app.get("/tasks", taskController.getTasks);
app.get("/lists", listController.getLists);

app.listen(3000, "localhost", () => console.log("Serviço toDo ativo."));
