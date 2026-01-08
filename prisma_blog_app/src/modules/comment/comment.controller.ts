import { Request, Response } from "express";
import { commentService } from "./comment.service";
import { success } from "better-auth/*";
import { UserRole } from "../../middleware/auth.middleware";

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


const getCommentsByAUthor = async(req:Request, res:Response) => {
    try {
        const {authorId} = req.params;
        if(!authorId){
            res.status(400).json({
                success: false,
                message: 'Required author id!!'
            });

            return;
        }

        const result = await commentService.getCommentsByAuthor(authorId);
        res.status(200).json(result)

        
    } catch (error) {
        res.status(400).json({
            error: "Couldn't get the comment",
            details: error
        })
    }
}

const deleteComment = async(req:Request, res:Response) => {
    try {
        const {commentId} = req.params;
        if(!req.user){
        res.status(200).json({success: false, message: 'You are not authorised for this operation!!'})
            return
        }
        const {id} = req.user; 
        if(!commentId){
            res.status(400).json({
                success: false,
                message: 'comment id is required!!'
            });

            return;
        }


        const result = await commentService.deleteComment(commentId,id);
        res.status(200).json(result)
        
        
    } catch (error : any) {
        res.status(400).json({
            error: "Comment delete failed!",
            details: error.message
        })
    }
}


const updateComment = async(req:Request, res:Response) => {
    try {
        const {commentId} = req.params;
        if(!req.user){
        res.status(200).json({success: false, message: 'You are not authorised for this operation!!'})
            return
        }
        const {id} = req.user; 
        if(!commentId){
            res.status(400).json({
                success: false,
                message: 'comment id is required!!'
            });

            return;
        }
        const result = await commentService.updateComment(commentId,id,req.body);
        res.status(200).json(result)
                
    } catch (error : any) {
        console.log(error);
        res.status(400).json({
            error: "Comment update failed!",
            details: error.message
        })
    }
}

const moderateComment = async(req:Request, res:Response) => {
    try {
        const {commentId} = req.params;
        if(!req.user){
        res.status(200).json({success: false, message: 'You are not authorised for this operation!!'})
            return
        }

        if(!commentId){
            res.status(400).json({
                success: false,
                message: 'comment id is required!!'
            });

            return;
        }
        if(req.user.role !== UserRole.ADMIN){
        res.status(200).json({success: false, message: 'You are not authorised for this operation!!'})
            return
        }
        const result = await commentService.moderateComment(commentId, req.body);
        res.status(200).json(result)
                
    } catch (error) {
        console.log(error);
        const errorMessage = (error instanceof  Error)? error.message : "Comment update failed!"
        res.status(400).json({
            success:false,
           message: errorMessage
        })
    }
}


export const commentController = {
    createComment,
    getCommentById,
    getCommentsByAUthor,
    deleteComment,
    updateComment,
    moderateComment

}