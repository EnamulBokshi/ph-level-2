import { CommentStatus, Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { UserRole } from "../../middleware/auth.middleware";



const createPost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => { // here Post  has several entries but we dont required all of them like id, that's  why we have used Omit type which means some of the data may not included, like "id", "createdAt", "updatedAt" these fileds will be filled automatically
    const result = await prisma.post.create({
        data
    })

    return result
}


const getAllPosts = async ({ search, tags, isFeatured, status, authorId, page, limit, skip, sortBy, orderBy }:
    { search?: string | undefined, tags: string[] | [], isFeatured: boolean | undefined, status: PostStatus | undefined, authorId: string, page: number, limit: number, skip: number, sortBy: string, orderBy: string }) => {
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

    if (tags.length > 0) {
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

    if (status) {
        partials.push({
            status
        })
    }
    if (authorId) {
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
                select: { comments: true }
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
            totalPage: Math.ceil((total / limit))
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

const getPostById = async (postId: string) => {
    return await prisma.$transaction(async (tx) => {
        await tx.post.update({
            where: {
                id: postId
            },
            data: {
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
                    orderBy: { createdAt: "desc" },
                    include: {
                        replies: {
                            where: {
                                status: CommentStatus.APPROVED

                            },
                            orderBy: { createdAt: "asc" },
                            include: {
                                replies: {
                                    where: {
                                        status: CommentStatus.APPROVED
                                    },
                                    orderBy: { createdAt: "asc" },
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

const myPosts = async (authorId: string) => {
    return await prisma.post.findMany({
        where: { authorId },
        orderBy: { createdAt: "desc" }
    })
}

const updatePost = async (postId: string, data: Partial<Post>, authorId: string, isAdmin: boolean) => {
    const post = await prisma.post.findUniqueOrThrow({ where: { id: postId, authorId }, select: { id: true } });
    if (!post.id && !isAdmin) {
        throw new Error('No posts exists against given credentials')
    };

    if (!isAdmin) {
        delete data.isFeatured;
    }

    return await prisma.post.update({
        where: {
            id: postId
        },
        data,
    })
}

const deletePost = async (postId: string, authorId: string, isAdmin: boolean) => {
    const post = await prisma.post.findUniqueOrThrow({ where: { id: postId, authorId }, select: { id: true } });
    if (!post.id && !isAdmin) {
        throw new Error('No posts exists against given credentials')
    };

    return await prisma.post.delete({
        where: {
            id: postId
        }
    })
}
const postStats = async () => {
    return await prisma.$transaction(async (tx) => {
        const [totalPosts, publishedPosts, archivedPosts, draftPosts, totalComments, rejectedComments, approvedComments, totalUser, adminCount, userCount, totalViews] = await Promise.all([
            await tx.post.count(),
            await tx.post.count({
                where: {
                    status: PostStatus.DRAFT
                }
            }),
            await tx.post.count({
                where: {
                    status: PostStatus.ARCHIVED
                }
            }),
            await tx.post.count({
                where: {
                    status: PostStatus.PUBLISHED
                }
            }),
            await tx.comment.count(),
            await tx.comment.count({where: {status: CommentStatus.REJECT}}),
            await tx.comment.count({where: {status: CommentStatus.APPROVED}}),
            await tx.user.count(),
            await tx.user.count({where: {role: UserRole.ADMIN}}),
            await tx.user.count({where: {role: UserRole.USER}}),
            await tx.post.aggregate({
                _sum: {
                    views: true
                }
            })

        ])
        // const totalPosts = await tx.post.count();
        // const draftPosts = await tx.post.count({
        //     where: {
        //         status: PostStatus.DRAFT
        //     }
        // });
        // const archivedPosts = await tx.post.count({
        //     where: {
        //         status: PostStatus.ARCHIVED
        //     }
        // });
        // const publishedPosts = await tx.post.count({
        //     where: {
        //         status: PostStatus.PUBLISHED
        //     }
        // });
        return {
            totalPosts,
            draftPosts,
            archivedPosts,
            publishedPosts,
            totalComments, 
            approvedComments,
            rejectedComments,
            totalUser,
            adminCount,
            userCount,
            totalViews: totalViews._sum.views
        }
    })
}
export const postService = {
    createPost,
    getAllPosts,
    getPostById,
    myPosts,
    updatePost,
    deletePost,
    postStats
}