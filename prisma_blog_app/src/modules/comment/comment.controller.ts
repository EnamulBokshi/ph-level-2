import { Request, Response } from "express";
import { commentService } from "./comment.service";

const createComment = async(req: Request, res:Response) => {
    console.log('Create comment controller!!');
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({success: false, message: 'Unauthorized'});
            return;
        }
      req.body.authorId = user.id
    
        const result = await commentService.createComment(req.body)
        res.status(200).json({success: true, message: 'Comment created successfully', data: result})
    } catch (error) {
        res.status(400).json({
            error: "Comment creation failed",
            details: error
        })
    }
}


const getCommentById = async(req: Request, res: Response) => {
        try {
            const {commentId} = req.params;
            if(!commentId){
                res.status(400).json({message: 'Comment Id required!!'})
                return;
            }
            const result = await commentService.getCommentById(commentId);
            res.status(200).json(result)
        } catch (error) {
             res.status(400).json({
            error: "Couldn't get the comment",
            details: error
        })
        }
}


export const commentController = {
    createComment,
    getCommentById
}