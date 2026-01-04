import { Router } from "express";
import { postController } from "./post.controller";
import authMiddleware, { UserRole } from "../../middleware/auth.middleware";

const router = Router();


router.post('/',authMiddleware(UserRole.ADMIN, UserRole.USER), postController.createPost);
router.get('/', postController.getAllPosts);


export const postRouter:Router = router;