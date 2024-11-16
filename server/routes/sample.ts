export default defineEventHandler((event) => {
    if (event.context.auth.roles.includes('admin')) {
        return {
            status: 200,
            body: {
                message: `sample api!!! from /api/sample.ts ${event.context.auth.user} with permissions ${event.context.auth.Permissions}`
            }
        }
    }
    else {
        return {
            status: 401,
            body: {
                error: 'Unauthorized'
            }
        }
    }
});