export default defineEventHandler((event) => {
    return {
        status: 203,
        body: {
            message: `cart api!!! from /api/cart/index.delete.ts ${event.context.auth.user} with permissions ${event.context.auth.Permissions}`
        }
    }
});