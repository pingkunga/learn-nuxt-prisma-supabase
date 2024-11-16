export default defineEventHandler((event) => {
    return {
        status: 201,
        body: {
            name: 'post cart api!!! from /api/cart/index.post.ts '
        }
    }
});