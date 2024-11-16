export default defineEventHandler((event) => {
    return {
        status: 200,
        body: {
            name: 'cart api!!! from /api/cart/index.get.ts '
        }
    }
});