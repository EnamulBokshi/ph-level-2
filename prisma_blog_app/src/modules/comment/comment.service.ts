import { CommentStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const createComment = async(payload: {
    content: string;
    postId: string;
    authorId: string;
    parent?: string | undefined;
}) => {
    
    const postData = await prisma.post.findUniqueOrThrow({
        where:{ 
            id: payload.postId
        }});
    
    if(payload.parent){
       const parentData = await prisma.comment.findUniqueOrThrow({
            where: {
                id: payload.parent
            }
        })
    }
    
    const result = await prisma.comment.create({
        data: payload as any
    });
    
    return result;
}

const getCommentById = async(commentId: string)=>{
    return await prisma.comment.findUnique({
        where: {
            id: commentId
        },
        include: {
            replies: true,
            post:{
                select: {
                    id: true,
                    title: true,
                    views: true,
                }
            },
            _count: {
                select: {replies:true}
            }
        }
    })
}

const getCommentsByAuthor = async(authorId:string)=> {
    return await prisma.comment.findMany({
        where: {
            authorId,
        },
        orderBy: {createdAt: "desc"}
        ,
        include: {
            post: {
                select: {
                    id: true,
                    title: true,

                }
            }
        }
    })
}

const deleteComment = async(commentId: string, authorId: string) => {
    console.log({commentId, authorId})
    const commentData = await prisma.comment.findFirst({
        where: {
            id: commentId,
            authorId
        },

        select: {
            id: true
        }
    })
    if(!commentData){
        throw Error('Invalid credentials!!');

    }

    return await prisma.comment.delete({
        where: {
            id: commentData.id
        }
    })
}
const updateComment = async(commentId: string, authorId: string, data: {content?: string, status?: CommentStatus}) => {
    console.log({commentId, authorId})
    const commentData = await prisma.comment.findFirst({
        where: {
            id: commentId,
            authorId
        },

        select: {
            id: true
        }
    })
    if(!commentData){
        throw Error('Invalid credentials!!');

    }

    return await prisma.comment.update({
        where: {
            id: commentData.id,
            authorId,
        },
        data: data
    })
}
const moderateComment = async(commentId: string, data:{status: CommentStatus})=> {
    const comment = await prisma.comment.findUniqueOrThrow({where: {id: commentId}});
    if(comment.status === data.status){
        throw Error(`There is nothing to update!!. The status is already set as ${data.status}`)
    }
   return await prisma.comment.update({
    where:{
        id: commentId
    },
    data,
   })
}
export const commentService = {
    createComment,
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment,
    moderateComment
}