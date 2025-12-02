import { Router } from "express";
import {userControllers} from "./users.controllers";

const router = Router();

router.post("/", userControllers.createUser);

router.get("/", userControllers.getUsers );

router.delete("/:id", userControllers.deleteUser);

// Handle single user actions request

router.get("/:id", userControllers.getUser);




export const userRoutes = router;