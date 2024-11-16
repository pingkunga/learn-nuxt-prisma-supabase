export default defineEventHandler((event) => {

    //http://localhost:3000/users/1
    const id = getRouterParam(event, 'id');

    //http://localhost:3000/users/1/?name=John&type=admin&page=1
    const query = getQuery(event);


    return {
        status: 200,
        body: {
            id: id,
            query: {name: query.name, type: query.type, page: query.page},
            message: `user api!!! from /api/users/${id}.ts`
        }
    }
});