import { Router } from "express";
import { commentController } from "./comment.controller";
import authMiddleware, { UserRole } from "../../middleware/auth.middleware";

const router = Router();



router.post('/',authMiddleware(UserRole.ADMIN, UserRole.USER), commentController.createComment)
router.get("/:commentId", authMiddleware(UserRole.ADMIN, UserRole.USER), commentController.getCommentById)

router.get("/author/:authorId", commentController.getCommentsByAUthor)

router.delete(
    "/:commentId",
    authMiddleware(UserRole.ADMIN, UserRole.USER),
    commentController.deleteComment
)


router.patch(
    "/:commentId",
    authMiddleware(UserRole.ADMIN, UserRole.USER),
    commentController.updateComment
)
router.patch(
    "/:commentId/moderate",
    authMiddleware(UserRole.ADMIN),
    commentController.moderateComment
)

const commentRouter:Router = router;


export default commentRouter;