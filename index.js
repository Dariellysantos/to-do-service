let express = require("express");
let app = express();
const taskController = require("./controller/taskController.js");

app.get("/tasks", taskController.getTasks);

app.listen(3000, "localhost", () => console.log("Serviço toDo ativo."));
