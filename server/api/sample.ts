export default defineEventHandler((event) => {

    //เข้า middleware ก่อน
    if (event.context.auth.role !== 'admin') {
        throw createError({
            status: 401,
            message: 'Unauthorized'
        });
    }

    return {
        status: 200,
        body: {
            name: 'sample api!!! from /api/sample.ts '
        }
    }
});