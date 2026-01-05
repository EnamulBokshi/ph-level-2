import { Request, Response } from "express";
import { postService } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";
import paginationSortHelper from "../../helpers/paginationSort.helper";

const createPost = async (req: Request, res: Response) => {
    try {
        console.log(req.user);
        const result = await postService.createPost({ ...req.body, authorId: req.user?.id });
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({
            error: "Post creation failed",
            details: error
        })
    }
}

const getAllPosts = async (req: Request, res: Response) => {
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
        console.error(error)
        res.status(400).json({
            success: false,
            message: 'Somthing went wrong!!!'
        })
    }
}

const getPostById = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;
        if (!postId) {
            throw new Error('Post id is required!!');
        }

        const result = await postService.getPostById(postId);
        res.status(201).json(result)

    } catch (error) {
        res.status(400).json({
            error: "Post retrival failed!!",
            details: error
        })
    }

}

export const postController = {
    createPost,
    getAllPosts,
    getPostById
}