import { Router } from "express";
import {userControllers} from "./users.controllers";
import auth from "../../middlewares/auth.middleware";
import logger from "../../middlewares/logger.middleware";

const router = Router();

router.post("/",logger, auth(), userControllers.createUser);

router.get("/", userControllers.getUsers );

router.delete("/:id", userControllers.deleteUser);

// Handle single user actions request

router.get("/:id", userControllers.getUser);
router.put("/:id", userControllers.updateUser);




export const userRoutes = router;