export default defineEventHandler((event) => {
    // event.context.auth = {
    //     user: 'testuser',
    //     roles: ['admin'], 
    //     Permissions: ['read', 'write']
    // };

    event.context.auth = {
        user: 'testuser',
        roles: ['user'], 
        Permissions: ['read', 'write']
    };

    console.log(event.context.auth);
});