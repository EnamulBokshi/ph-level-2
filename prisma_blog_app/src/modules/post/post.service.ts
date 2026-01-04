import { Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";



const createPost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => { // here Post  has several entries but we dont required all of them like id, that's  why we have used Omit type which means some of the data may not included, like "id", "createdAt", "updatedAt" these fileds will be filled automatically
    const result = await prisma.post.create({
        data
    })

    return result
}


const getAllPosts = async ({ search, tags, isFeatured,status,authorId}: { search?: string | undefined, tags: string[] | [], isFeatured: boolean | undefined, status: PostStatus | undefined, authorId:string}) => {
    const partials: PostWhereInput[] = [];
    if (search) {
        partials.push({
            OR: [
                {
                    title: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    content: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    tags: {
                        has: search
                    }
                }

            ],
        },)
    }

    if (tags.length>0) {
        partials.push({
            tags: {
                hasEvery: tags

            }
        })
    }
    if (typeof isFeatured === 'boolean') {
        partials.push({
            isFeatured
        })
    }

    if(status){
        partials.push({
            status
        })
    }
    if(authorId){
        partials.push({
            authorId
        })
    }
    return await prisma.post.findMany({
        where: {
            AND: partials,
        }
    });
}

/*
    In the above prisma qeury, we have used conditionals
    inside the where conditional I have used and, or conditions.
    lets's have a closer look at those conditionals
    AND : [element1, element2] if element1 and element2 both are satisfied then it will return the desired result. 
    now in the element1 we used another conditionla 'or'.
    In 'OR' clause, OR: [element 1, 2, 3 ] any of them should be true to fetch the desired data.
    and that's it
 */

export const postService = {
    createPost,
    getAllPosts,
}