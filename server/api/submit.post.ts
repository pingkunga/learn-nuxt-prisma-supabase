export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    return {
        status: 201,
        body: {
            name: 'submit api!!! from /api/submit.post.ts ',
            body: body
        }
    }
});