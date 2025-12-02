import { Router } from "express";
import { todoController } from "./todo.controller";

const route = Router()
//get todos
route.get("/", todoController.getTodos);
route.get("/:id", todoController.getTodo);

// create todo
route.post("/", todoController.createTodo);

// update a todo
route.put("/:id",todoController.updateTodo);

// delete a todo
route.delete("/:id", todoController.deleteTodo);



export const todoRoutes = route;
