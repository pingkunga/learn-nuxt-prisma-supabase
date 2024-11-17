import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export default defineEventHandler(async (event) => {

    //SELECT * FROM users JOIN posts ON users.id = posts.author_id

    const users = await prismaClient.user.findMany({
        include: {
            posts: true
        }
    });

    return users;
});