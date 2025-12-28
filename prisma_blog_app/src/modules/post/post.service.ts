import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";



const createPost = async(data: Omit<Post, "id" | "createdAt"|"updatedAt">)=>{ // here Post  has several entries but we dont required all of them like id, that's  why we have used Omit type which means some of the data may not included, like "id", "createdAt", "updatedAt" these fileds will be filled automatically
    const result = await prisma.post.create({
        data
    })

    return result
}


export const postService = {
    createPost
}