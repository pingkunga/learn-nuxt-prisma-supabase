import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
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
            published: true
        }
    });

    return posts;
});