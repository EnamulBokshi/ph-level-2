import { Router } from "express";
import { postController } from "./post.controller";
import authMiddleware, { UserRole } from "../../middleware/auth.middleware";

const router = Router();

router.post('/',authMiddleware(UserRole.ADMIN, UserRole.USER), postController.createPost);
router.get('/', postController.getAllPosts);
router.get("/my-posts", authMiddleware(UserRole.ADMIN, UserRole.USER), postController.myPosts)

router.get('/:postId', postController.getPostById);
router.patch('/:postId', authMiddleware(UserRole.USER, UserRole.ADMIN), postController.updatePost);
export const postRouter:Router = router;