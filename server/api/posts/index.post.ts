import { PrismaClient } from "@prisma/client";
import { Tpost } from "~/types/post";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const reqBody = await readBody<Tpost>(event);
    console.log(reqBody);
    if (!reqBody.author) {
        throw new Error("Author is missing in the request body");
    }
    
    const post = await prisma.post.create({
        data: {
            title: reqBody.title,
            content: reqBody.content,
            published: reqBody.published,
            author: {
                //connectOrCreate ถ้าไม่มีให้สร้างใหม่เลย
                //!. คือ ไม่ให้มีค่า null
                connectOrCreate: {
                    where: { 
                        email: reqBody.author!.email 
                    },
                    create: { 
                        name: reqBody.author!.name, 
                        email: reqBody.author!.email 
                    }
                }
            }
        }
    });

    return post;
});