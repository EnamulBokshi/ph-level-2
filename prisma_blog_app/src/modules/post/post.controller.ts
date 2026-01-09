import { NextFunction, Request, Response } from "express";
import { postService } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";
import paginationSortHelper from "../../helpers/paginationSort.helper";
import { UserRole } from "../../middleware/auth.middleware";
import { success } from "better-auth/*";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.user);
        const result = await postService.createPost({ ...req.body, authorId: req.user?.id });
        res.status(201).json(result)
    } catch (error) {
        next(error);
    }
}

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { search } = req.query || "";
        const searchValue = typeof search === 'string' ? search : undefined;

        const tags = req.query.tags ? (req.query.tags as string).split(",") : []

        const isFeatured = req.query.isFeatured ? req.query.isFeatured === 'true' : undefined;

        const status = req.query.status ? req.query.status : undefined;
        const authorId = req.query.authorId ? req.query.authorId : undefined

        const options = paginationSortHelper(req.query);

        const result = await postService.getAllPosts({ search: searchValue, tags: tags, isFeatured: isFeatured, status: status as PostStatus, authorId: authorId as string, ...options });

        // Meta data
        // const 
        // const pagination = {

        // }
        // if(posts.length>0){
        //     res.status(200).json({
        //         success: true,
        //         totalData: posts.length,
        //         data: posts
        //     })
        //     return;
        // }
        // res.status(200).json({success: true, message: "No Posts Found", data: []});

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const getPostById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { postId } = req.params;
        if (!postId) {
            throw new Error('Post id is required!!');
        }

        const result = await postService.getPostById(postId);
        res.status(201).json(result)

    } catch (error) {
       next(error)
    }

}

const myPosts = async (req: Request, res: Response, next:NextFunction) => {
    try {
        if(!req.user){
            throw new Error("You are not authorized!!");
        }

        const result = await postService.myPosts(req.user.id);
        res.status(200).json(result)

    } catch (error) {
        next(error)
    }

}

const updatePost = async(req: Request, res:Response, next: NextFunction) =>{
    try {
        const postId = req.params.postId;
        const authorId = req.user?.id;
        if(!postId || !authorId) {
            throw new Error('Post id or author is messing!!');
        }
        const isAdmin: boolean = req.user?.role === UserRole.ADMIN;
        const result = await postService.updatePost(postId, req.body, authorId, isAdmin);
        res.status(202).json(result);
        
    } catch (error) {
         next(error)
    }
}

const deletePost = async(req: Request, res:Response, next: NextFunction) =>{
    try {
        const postId = req.params.postId;
        const authorId = req.user?.id;
        if(!postId || !authorId) {
            throw new Error('Post id or author is messing!!');
        }
        const isAdmin: boolean = req.user?.role === UserRole.ADMIN;
        const result = await postService.deletePost(postId,  authorId, isAdmin);
        res.status(202).json(result);
        
    } catch (error) {
         console.log(error)
        next(error)
    }
}
const postStats = async(req: Request, res: Response, next: NextFunction)=> {
    try {
        if(!req.user) {
            throw new Error('Post id or author is messing!!');
        }
        const isAdmin: boolean = req.user?.role === UserRole.ADMIN;
        if(!isAdmin) {
            throw new Error('You are not authorized to access this resources');

        }
        const data = await postService.postStats();
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        next(error)
    }
}
export const postController = {
    createPost,
    getAllPosts,
    getPostById,
    myPosts,
    updatePost,
    deletePost,
    postStats
}