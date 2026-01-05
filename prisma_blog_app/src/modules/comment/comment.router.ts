import { Router } from "express";
import { commentController } from "./comment.controller";
import authMiddleware, { UserRole } from "../../middleware/auth.middleware";

const router = Router();



router.post('/',authMiddleware(UserRole.ADMIN, UserRole.USER), commentController.createComment)

const commentRouter:Router = router;


export default commentRouter;