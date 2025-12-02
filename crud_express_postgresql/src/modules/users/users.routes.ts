import { Router } from "express";
import {userControllers} from "./users.controllers";
import auth from "../../middlewares/auth.middleware";
import logger from "../../middlewares/logger.middleware";

const router = Router();

router.post("/", userControllers.createUser);

router.get("/",logger, auth("admin"), userControllers.getUsers );

router.delete("/:id",logger, auth(), userControllers.deleteUser);

// Handle single user actions request

router.get("/:id",logger, auth(), userControllers.getUser);
router.put("/:id",logger, auth(), userControllers.updateUser);

export const userRoutes = router;