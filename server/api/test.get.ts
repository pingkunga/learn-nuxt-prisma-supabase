export default defineEventHandler((event) => {
    return {
        status: 200,
        body: {
            message: `test api!!! from /api/test.post.ts ${event.context.auth.user} with permissions ${event.context.auth.Permissions}`
        }
    }
});