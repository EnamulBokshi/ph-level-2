import { Router } from "express";
import { todoController } from "./todo.controller";
import logger from "../../middlewares/logger.middleware";
import auth from "../../middlewares/auth.middleware";

const route = Router()
//get todos
route.get("/",logger, auth() ,todoController.getTodos);
route.get("/:id", todoController.getTodo);

// create todo
route.post("/",logger, auth(), todoController.createTodo);

// update a todo
route.put("/:id",logger, auth(),todoController.updateTodo);

// delete a todo
route.delete("/:id",logger, auth(), todoController.deleteTodo);



export const todoRoutes = route;
