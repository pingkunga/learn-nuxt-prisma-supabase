import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const searchTitle = query.title as string || '';

    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
        },
        orderBy: {
            id: 'desc'
        },
        where: {
            published: true,
            ...(searchTitle && {
                title: {
                    contains: searchTitle,
                    mode: 'insensitive' // Case-insensitive search
                }
            })
        }
    });

    return posts;
});
