import { Tpost } from '~/types/post';
import { PrismaClient } from "@prisma/client";

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

    const body = await readBody<Tpost>(event);

    const post = await prismaClient.post.update({
        where: {
            id: parseInt(postid)
        },
        data: {
            title: body.title,
            content: body.content,
            published: body.published,
        }
    });
    return post;
});