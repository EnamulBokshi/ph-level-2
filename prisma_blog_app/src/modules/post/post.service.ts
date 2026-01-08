import { CommentStatus, Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";



const createPost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => { // here Post  has several entries but we dont required all of them like id, that's  why we have used Omit type which means some of the data may not included, like "id", "createdAt", "updatedAt" these fileds will be filled automatically
    const result = await prisma.post.create({
        data
    })

    return result
}


const getAllPosts = async ({ search, tags, isFeatured,status,authorId, page, limit, skip, sortBy, orderBy}: 
    { search?: string | undefined, tags: string[] | [], isFeatured: boolean | undefined, status: PostStatus | undefined, authorId:string, page:number, limit: number, skip: number, sortBy: string, orderBy: string }) => {
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
    const allPosts = await prisma.post.findMany({
        take: limit,
        skip,
        where: {
            AND: partials,
        },
        orderBy: {
            [sortBy]: orderBy
        },
        include: {
            _count: {
                select: {comments: true}
            }
        }
    });

    // meta data

    const total = await prisma.post.count({
        where: {
            AND: partials
        } 
    })

    return {
        data: allPosts,
        pagination: {
            page,
            limit,
            total,
            totalPage: Math.ceil((total/limit))
        }

    }
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

const getPostById = async(postId: string) => {
    return await prisma.$transaction(async(tx)=> {
        await tx.post.update({
            where:{
                id: postId
            },
            data:{
                views: {
                    increment: 1
                }
            }
        });
        const postData = await tx.post.findUnique({
            where: {
                id: postId
            },
            include: {
                comments: {
                    where: {
                        parentId: null,
                        status: CommentStatus.APPROVED
                    },
                    orderBy: {createdAt: "desc"},
                    include: {
                        replies: {
                            where: {
                             status: CommentStatus.APPROVED
                            
                            },
                            orderBy: {createdAt: "asc"},
                            include: {
                                replies: {
                                    where: {
                                        status: CommentStatus.APPROVED
                                    },
                                    orderBy: {createdAt: "asc"},
                                }
                            }
                        }
                    }
                },
            _count: {
               select: {
                comments: true
               }
            }
            },
            
        })
        return postData;
    });
}

const myPosts = async(authorId: string) =>{
    return await prisma.post.findMany({
        where: {authorId},
        orderBy: {createdAt: "desc"}
    })
}

const updatePost = async(postId:string, data:Partial<Post>, authorId:string, isAdmin:boolean) => {
    const post = await prisma.post.findUniqueOrThrow({where:{id: postId,authorId}, select:{id:true}});
    if(!post.id && !isAdmin) {
        throw new Error('No posts exists against given credentials')
    };

    if(!isAdmin){
        delete data.isFeatured;
    }
    
    return await prisma.post.update({
        where: {
            id: postId
        },
        data,
    })
}

export const postService = {
    createPost,
    getAllPosts,
    getPostById,
    myPosts,
    updatePost
}