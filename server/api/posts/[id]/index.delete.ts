import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

export default defineEventHandler(async (event) => {
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

    const post = await prismaClient.post.delete({
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

    return {
        statusCode: 200,
        message: 'Post deleted',
        body: post
    };
});