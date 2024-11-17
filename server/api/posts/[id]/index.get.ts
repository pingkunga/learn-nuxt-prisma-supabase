import { PrismaClient } from '@prisma/client';


const prismaClient = new PrismaClient();

export default async (event: any) => {

    const postid = getRouterParam(event, 'id');

    if (!postid) {
        throw createError({
            message: 'Post ID is required',
            status: 400
        });
    }

    //try parse int
    if (isNaN(parseInt(postid))) {
        throw createError({
            message: 'Post ID must be a number',
            status: 400
        });
    }
    
    const post = await prismaClient.post.findUnique({
        where: {
            id: parseInt(postid)
        }
    });

    if (!post) {
        throw createError({
            message: 'Post not found',
            status: 404
        });
    }

    return post;
}