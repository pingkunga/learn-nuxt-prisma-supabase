export default defineEventHandler((event) => {
    return {
        status: 200,
        body: {
            name: 'sample api!!! from /sample.ts '
        }
    }
});