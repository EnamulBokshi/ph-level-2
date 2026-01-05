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



export const commentService = {
    createComment
}